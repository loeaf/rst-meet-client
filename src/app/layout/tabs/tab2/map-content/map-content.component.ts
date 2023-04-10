import { AfterViewInit, Component, OnInit } from '@angular/core';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import { Geolocation } from '@capacitor/geolocation';
import { fromLonLat, Projection, transform } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import { Feature } from 'ol';
import { Fill, Icon, Stroke, Style } from 'ol/style';
import { Point } from 'ol/geom';
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
      selectClick.on('select', async (e) => {
        const obj: any = e.selected[0].getProperties();
        const queryParams = {
          rstInfo: obj.rstInfo.id
        };
        await this.router.navigate(['/rst-info'], { queryParams });
      });
    }
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
    const geom = new Point([datum.longitude, datum.latitude]);
    const feature = new Feature(geom);
    debugger;
    feature.setProperties({
      rstInfo: datum,
      text: datum.name
    });
    feature.setStyle(
      new Style({
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
    console.log(elapsed)
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
}
