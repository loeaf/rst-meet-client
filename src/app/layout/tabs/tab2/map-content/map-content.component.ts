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
        const obj: any = e.selected[0].getProperties();
        const queryParams = {
          rstInfo: obj.rstInfo.id
        };
        await this.router.navigate(['/rst-info'], { queryParams });
      });
    };
  }
  private initMap () {
    // 배경 background 생성
    this.initTiles();
    // 레스토랑 위치 point 생성
    this.initRstPoint();
    // 내 위치 정보 생성
    this.initMyLocation();
    // 맵 생성
    this.initMapInstance();
  }
  private initMapInstance() {
    // google 좌표계
    // proj4.defs('EPSG:3857', '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs');
    const proj4326 = new Projection({
      code: 'EPSG:4326',
      units: 'degrees',
    });
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
  }
  private initTiles() {
    const tileLayer = new TileLayer({
      source: new OSM(),
    })
    this.tileLayer = tileLayer;
  }
  private initMyLocation() {
    const myLocationSource = new VectorSource({
      wrapX: false,
    });
    this.myLocationSource = myLocationSource;
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
    this.myLocationPoint = myLocationPoint;
  }
  private initRstPoint() {
    const rstSource = new VectorSource({
      wrapX: false,
    });
    this.rstSource = rstSource;
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
    this.rstPoint = rstPoint;
    return rstPoint;
  }
  async renderRestaurants() {
    const data = await this.multiInfoSvc.getNearRstList();
    for (const datum of data) {
      this.addRstFeature(datum);
    }
  }
  addRstFeature(datum: any) {
    debugger;
    let imageUrl = '/assets/image/Group_826.png';
    if (datum.foodTypeId === 1) {
      imageUrl = '/assets/image/Group_825.png';
    }
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
