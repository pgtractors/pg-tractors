import { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Store locations
const locations = [
  {
    name: "PG Tractors - Puducherry",
    address: "NO.6 ABDUL KALAM STREET, PUDUCHERRY TO TINDIVANAM MAIN ROAD, OPP.KFC, PATTANUR - 605 006",
    lat: 11.9337,
    lng: 79.8083,
    phone: "9894428729"
  },
  {
    name: "PG Tractors - Chennai",
    address: "No.135, Poonamallee High Road, Velappanchavadi, Chennai – 600 077",
    lat: 13.0827,
    lng: 80.2707,
    phone: "9500075955"
  },
  {
    name: "PG Tractors - Thanjavur",
    address: "NO.5, GANDHI NAGAR, MOTHER TERESA HOSPITAL (NEAR), THANJAVUR - 613 005",
    lat: 10.7870,
    lng: 79.1378,
    phone: "9976888919"
  }
];

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || !window.google) return;

      // Center map on Tamil Nadu
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 7,
        center: { lat: 11.5, lng: 79.5 },
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true,
      });

      mapInstanceRef.current = map;

      // Add markers for each location
      locations.forEach((location) => {
        const marker = new window.google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: map,
          title: location.name,
          animation: window.google.maps.Animation.DROP,
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 8px; max-width: 250px;">
              <h3 style="font-weight: bold; margin-bottom: 8px; color: #1a1a1a;">${location.name}</h3>
              <p style="font-size: 14px; margin-bottom: 8px; color: #666;">${location.address}</p>
              <p style="font-size: 14px; color: #2563eb;"><strong>Phone:</strong> ${location.phone}</p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}" 
                 target="_blank" 
                 style="display: inline-block; margin-top: 8px; padding: 6px 12px; background: #2563eb; color: white; text-decoration: none; border-radius: 4px; font-size: 13px;">
                Get Directions
              </a>
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });
    };

    // Load Google Maps script
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initGoogleMap`;
      script.async = true;
      script.defer = true;
      
      (window as any).initGoogleMap = initMap;
      
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  const handleGetDirections = (location: typeof locations[0]) => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`,
      '_blank'
    );
  };

  return (
    <div className="space-y-6">
      {/* Google Maps JavaScript API */}
      <div className="rounded-lg overflow-hidden border border-border">
        <div 
          ref={mapRef} 
          className="w-full h-[500px]"
        />
      </div>

      {/* Get Directions Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {locations.map((location) => (
          <Button
            key={location.name}
            onClick={() => handleGetDirections(location)}
            variant="outline"
            className="w-full"
          >
            <MapPin className="mr-2 h-4 w-4" />
            Directions to {location.name.split(' - ')[1]}
          </Button>
        ))}
      </div>

      {/* Note about API Key */}
      <p className="text-xs text-muted-foreground text-center">
        Note: Replace YOUR_GOOGLE_MAPS_API_KEY in GoogleMap.tsx with your actual Google Maps API key
      </p>
    </div>
  );
};

export default GoogleMap;
