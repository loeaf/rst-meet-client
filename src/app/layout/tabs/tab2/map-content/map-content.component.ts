import { AfterViewInit, Component, OnInit } from '@angular/core';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import { Geolocation } from '@capacitor/geolocation';
import { fromLonLat, Projection, transform } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import { Feature, Overlay } from 'ol';
import { Fill, Icon, RegularShape, Stroke, Style } from 'ol/style';
import { LineString, Point } from 'ol/geom';
import VectorSource from 'ol/source/Vector';
import CircleStyle from 'ol/style/Circle';
import { unByKey } from 'ol/Observable';
import {getVectorContext} from 'ol/render.js';
import {easeOut} from 'ol/easing.js';
import { Select } from 'ol/interaction';
import {altKeyOnly, click, pointerMove} from 'ol/events/condition.js';
import { Router } from '@angular/router';
import { UtilesService } from '../../../../utiles/utiles.service';
import { RstService } from '../../../../service/rst.service';
import { MapContentService } from './map-content.service';
import Text from 'ol/style/Text';
import { Options } from 'ol/style/Text';
import XYZ from 'ol/source/XYZ';
import { Tile } from 'ol/layer';
import proj4 from 'proj4';

@Component({
  selector: 'app-map-content',
  templateUrl: './map-content.component.html',
  styleUrls: ['./map-content.component.scss'],
})
export class MapContentComponent implements OnInit, AfterViewInit {

  duration: any = 3000;
  myLocationSource: any = null;
  rstSource: any = null;
  myLocationPoint: any = null;
  rstPoint: any = null;
  tileLayer: any = null;
  map: any = null;
  listenerKey: any = null;
  flashGeom: any = null;
  longitude = 0;
  latitude = 0;
  start = Date.now();
  constructor(private multiInfoSvc: RstService,
              private mapContentService: MapContentService,
              private router: Router) { }
  async ngOnInit() {
    this.mapContentService.mapRender.subscribe(async (p: any) => {
      this.removeRstFeature()
      await this.renderRestaurants();
    });
  }

  async ngAfterViewInit () {
    const p: any = await UtilesService.getGeolocation();
    this.longitude = p.coords.longitude;
    this.latitude = p.coords.latitude;
    console.log(this.longitude, ',',  this.latitude);
    this.initMap();
    this.mapContentService.mapRender.emit();
    this.addMyLocationFeature(this.longitude, this.latitude);
    this.listenerKey = this.tileLayer.on('postrender', this.animate.bind(this));
    this.clickMark();
  }

  private clickMark () {
    const selectClick = new Select({
      condition: click
    });
    if (selectClick !== null) {
      this.map.addInteraction(selectClick);
      selectClick.on('select', async (e: any) => {
        if(false) {
          // const clickCoord = e.coordinate;
          // 클릭한 위치에서 가장 가까운 feature를 찾아옴
          const feature = this.map.forEachFeatureAtPixel(e.mapBrowserEvent.pixel, function (feature: any) {
            return feature;
          });

          if (feature) {
            // feature의 좌표
            const featureCoord = feature.getGeometry().getCoordinates();

            // 포물선을 그릴 스타일 설정
            const style = new Style({
              stroke: new Stroke({
                color: '#ffcc33',
                width: 3,
              }),
              fill: new Fill({
                color: '#ffcc33',
              }),
            });

            // 포물선의 시작점과 끝점을 연결하는 선을 그림
            const line = new LineString([[this.longitude, this.latitude], featureCoord]);
            const lineFeature: any = new Feature({
              geometry: line,
            });
            lineFeature.setStyle(style);

            // 포물선의 끝점에 화살표를 그림
            const arrow = new RegularShape({
              fill: new Fill({ color: 'red' }),
              stroke: new Stroke({ color: 'red', width: 1 }),
              points: 3,
              radius: 10,
              rotation: Math.PI / 2,
              angle: Math.PI / 2
            });
            const arrowStyle: any = new Style({
              image: arrow
            });
            const arrowFeature: any = new Feature({
              geometry: new Point(featureCoord),
            });
            arrowFeature.setStyle(arrowStyle);

            // Overlay를 이용하여 포물선과 화살표를 지도 위에 추가함
            const overlay = new Overlay({
              element: arrowFeature,
              offset: [0, -30],
              positioning: 'bottom-center',
            });
            this.map.addOverlay(overlay);

            const lineOverlay = new Overlay({
              element: lineFeature,
              offset: [0, -30],
              positioning: 'bottom-center',
            });
            this.map.addOverlay(lineOverlay);
          }
        }

        const obj: any = e.selected[0].getProperties();
        const queryParams = {
          rstInfo: obj.rstInfo.id
        };
        await this.router.navigate(['/rst-info'], { queryParams });
      });
    };
  }

  private initMap () {
    // Define the EPSG:4326 projection
    const proj4326 = new Projection({
      code: 'EPSG:4326',
      units: 'degrees',
    });
    const tileLayer = new TileLayer({
      source: new OSM(),
    })
    const myLocationSource = new VectorSource({
      wrapX: false,
    });
    const rstSource = new VectorSource({
      wrapX: false,
    });
    const myLocationPoint = new VectorLayer({
      source: myLocationSource,
      style: new Style({
        image: new CircleStyle({
          radius: 6,
          fill: new Fill({
            color: 'rgba(255, 255, 255, 1)',
          }),
          stroke: new Stroke({
            color: '#ff1515',
            width: 4,
          }),
        })
      }),
    });
    const imageUrl = '/assets/img/marker.png';
    const image = new Image();
    image.src = imageUrl;

    const rstPoint: any = new VectorLayer({
      source: rstSource,
      style: new Style({
        image: new CircleStyle({
          radius: 6,
          fill: new Fill({
            color: 'rgba(255, 255, 255, 0.2)',
          }),
          stroke: new Stroke({
            color: '#787efd',
            width: 4,
          }),
        }),
        // image: new Icon({
        //   img: image,
        //   imgSize: image ? [image.width, image.height] : undefined,
        //   offset: [0, -image.height / 2],
        // }),
        text: new Text({
          text: '',
          font: 'bold 12px Pretendard',
          fill: new Fill({
            color: '#000000'
          }),
          stroke: new Stroke({
            color: '#FFFFFF',
            width: 2
          }),
          offsetY: 10,
          minResolution: 500,
          maxResolution: 5000,
          textAlign: 'center',
          textBaseline: 'top',
          overflow: true,
          maxAngle: Math.PI / 6,
          exceedLength: true,
          placement: 'point'
        } as Options)
      }),
    });
    this.myLocationSource = myLocationSource;
    this.rstSource = rstSource;
    this.myLocationPoint = myLocationPoint;
    this.rstPoint = rstPoint;
    this.tileLayer = tileLayer;
    // google 좌표계
    // proj4.defs('EPSG:3857', '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs');

    this.map = new Map({
      target: 'map',
      layers: [this.tileLayer, this.myLocationPoint, this.rstPoint],
      view: new View({
        center: [this.longitude, this.latitude],
        zoom: 15,
        projection: proj4326, // Set the projection as the default projection for the view
        multiWorld: true,
      }),
    });
    // ------------------------------
    // daum(kakao) layers
    // ------------------------------
    // var daumTileGrid = new ol.tilegrid.TileGrid({
    //   extent : [(-30000-524288), (-60000-524288), (494288+524288), (988576+524288)],
    //   tileSize : 256,
    //   resolutions : [4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5, 0.25],
    //   minZoom : 1
    // });

    // function getDaumTileUrlFunction(type: any) {
    //
    //   var tileUrlFunction = function(tileCoord: any, pixelRatio: any, projection: any) {
    //
    //     var res = this.getTileGrid().getResolutions();
    //     var sVal = res[tileCoord[0]];
    //
    //     var yLength = 988576 - (-60000) + 524288 + 524288;
    //     var yTile = yLength / (sVal * this.getTileGrid().getTileSize());
    //
    //     var tileGap = Math.pow(2, (tileCoord[0] -1));
    //     yTile = yTile - tileGap;
    //
    //     var xTile = tileCoord[1] - tileGap;
    //
    //     if (type == 'base') {
    //       return 'https://map' + Math.floor( (Math.random() * (4 - 1 + 1)) + 1 ) + '.daumcdn.net/map_2d_hd/2111ydg/L' + (15 - tileCoord[0]) + '/' + (yTile + tileCoord[2]) + '/' + xTile + '.png';
    //     } else if (type == 'satellite') {
    //       return 'https://map' + Math.floor( (Math.random() * (4 - 1 + 1)) + 1 ) + '.daumcdn.net/map_skyview_hd/L' + (15 - tileCoord[0]) + '/' + (yTile + tileCoord[2]) + '/' + xTile + '.jpg';
    //     } else if (type == 'hybrid') {
    //       return 'https://map' + Math.floor( (Math.random() * (4 - 1 + 1)) + 1 ) + '.daumcdn.net/map_hybrid_hd/2111ydg/L' + (15 - tileCoord[0]) + '/' + (yTile + tileCoord[2]) + '/' + xTile + '.png';
    //     }
    //
    //   };

    //   return tileUrlFunction;
    //
    // }


    // daum base
    // var daumBaseLayer = new Tile({
    //   source: new XYZ({
    //     projection : 'EPSG:5181',
    //     tileGrid: daumTileGrid,
    //     tileUrlFunction: getDaumTileUrlFunction('base'),
    //     tilePixelRatio: 2,              // 타일사이즈 512일때 해상도 비율
    //   }),
    //   visible: false
    // });
    // this.map.addLayer(daumBaseLayer);


    rstPoint.on('click', (event: any) => {
      console.log('VectorLayer clicked!', event.coordinate);
      // Perform any other actions you need here
    });
  }

  async renderRestaurants() {
    const data = await this.multiInfoSvc.getNearRstList();
    for (const datum of data) {
      this.addRstFeature(datum);
    }
  }
  addRstFeature(datum: any) {
    const imageUrl = '/assets/image/Group_826.png';
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      const geom = new Point([datum.longitude, datum.latitude]);
      const feature = new Feature(geom);
      feature.setProperties({
        rstInfo: datum,
        text: datum.name
      });
      feature.setStyle(
        new Style({
          // image: new CircleStyle({
          //   radius: 6,
          //   fill: new Fill({
          //     color: 'rgba(255, 255, 255, 0.2)',
          //   }),
          //   stroke: new Stroke({
          //     color: '#787efd',
          //     width: 4,
          //   }),
          // }),
          image: new Icon({
            img: image,
            imgSize: image ? [image.width, image.height] : undefined,
            offset: [0, 1],
          }),

          text: new Text({
            text: datum.name,
            font: 'bold 12px Pretendard',
            fill: new Fill({
              color: '#000000'
            }),
            stroke: new Stroke({
              color: '#FFFFFF',
              width: 2
            }),
            offsetY: 10,
            textAlign: 'center',
            textBaseline: 'top',
            overflow: true,
            maxAngle: Math.PI / 6,
            exceedLength: true,
            placement: 'point'
          } as Options)
        })
      );
      this.rstSource.addFeature(feature);
    }
  }
  // removeRstFeature
  removeRstFeature() {
    if (this.rstSource === null) {
      return;
    }
    this.rstSource.clear();
  }

  addMyLocationFeature(lon: number, lat: number) {
    const geom = new Point([lon, lat]);
    const feature: any = new Feature(geom);
    this.flashGeom = feature.getGeometry().clone();
    this.myLocationSource.addFeature(feature);
  }
  animate(event: any) {
    const elapsed = Date.now() - this.start;
    // console.log(elapsed)
    if (elapsed >= this.duration) {
      this.start = Date.now();
      return;
    }
    const vectorContext = getVectorContext(event);
    const elapsedRatio = elapsed / this.duration;
    // radius will be 5 at start and 30 at end.
    const radius = easeOut(elapsedRatio) * 25 + 5;
    const opacity = easeOut(1 - elapsedRatio);

    const style = new Style({
      image: new CircleStyle({
        radius: radius,
        stroke: new Stroke({
          color: 'rgba(255, 0, 0, ' + opacity + ')',
          width: 0.25 + opacity,
        }),
      }),
    });

    vectorContext.setStyle(style);
    vectorContext.drawGeometry(this.flashGeom);
    // tell OpenLayers to continue postrender animation
    this.map.render();
  }

  async onInit () {
    const myPosition: any = await UtilesService.getGeolocation();
    this.latitude = myPosition.coords.latitude;
    this.longitude = myPosition.coords.longitude;
    this.setMyLocationPoint();
    await this.renderRestaurants();
    this.moveMap();
  }
  moveMap() {
    const currentZoomLevel = this.map.getView().getZoom();
    this.map.getView().animate({
      center: [this.longitude, this.latitude], // 위도, 경도 좌표로 중심점 이동
      zoom: currentZoomLevel, // 줌 레벨 이동
      duration: 2000 // 애니메이션 지속 시간 (ms)
    });
  }
  private setMyLocationPoint() {
    const newCoords = [this.longitude, this.latitude];
    const feature = new Feature({
      geometry: new Point(newCoords),
    });
    this.myLocationSource.clear();
    this.myLocationSource.addFeature(feature);
  }

}
