"use client";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

export default function ServiceCenterMap() {
  return (
    <YMaps>
      <div style={{ width: "100%", height: "600px" }}>
        <Map
          defaultState={{
            center: [41.33706448715841, 69.355573846876],
            zoom: 17,
          }}
          width="100%"
          height="100%"
        >
          <Placemark
            geometry={[41.33706448715841, 69.355573846876]}
            options={{
              iconLayout: "default#image",
              iconImageHref: "/placeMark.svg", // Ensure this exists in public
              iconImageSize: [130, 130],
            }}
            properties={{
              balloonContent: `
                  <div style="padding: 25px; background: white; color:black; max-width: 320px; width: 100%; font-family: sans-serif;">
                    <strong style=" color:black; ">Шота руставели 54</strong><br/>
                    +9986358977
                  </div>
                `,
            }}
            modules={["geoObject.addon.balloon"]}
          />
        </Map>
      </div>
    </YMaps>
  );
}
