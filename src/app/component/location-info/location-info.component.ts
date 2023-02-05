import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Clipboard } from '@capacitor/clipboard';
import { IonToastService } from '../../utiles/ion-toast.service';

const apiKey = 'YOUR_API_KEY_HERE';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss'],
})
export class LocationInfoComponent implements OnInit, AfterViewInit {

  constructor(private ionToastService: IonToastService) { }

  ngOnInit() {}

  ngAfterViewInit (): void {
    this.initMap();
  }
  async initMap() {
    const mapRef: any = document.getElementById('map');

    const newMap = await GoogleMap.create({
      id: 'my-map', // Unique identifier for this map instance
      element: mapRef, // reference to the capacitor-google-map element
      apiKey: apiKey, // Your Google Maps API Key
      config: {
        center: {
          // The initial position to be rendered by the map
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8, // The initial zoom level to be rendered by the map
      },
    });

// Add a marker to the map
    const markerId = await newMap.addMarker({
      coordinate: {
        lat: 33.6,
        lng: -117.9
      }
    });



// Move the map programmatically
    await newMap.setCamera({
      coordinate: {
        lat: 33.6,
        lng: -117.9
      }
    });

// Enable marker clustering
    await newMap.enableClustering();

// Handle marker click
    await newMap.setOnMarkerClickListener((event) => {});

// Clean up map reference
    await newMap.destroy();
  }
  async onCopy (text: string | null) {
    if (text === null) {
      return;
    }
    await Clipboard.write({
      string: text
    });
    this.ionToastService.presentToast(`${text}`);
  }
}
