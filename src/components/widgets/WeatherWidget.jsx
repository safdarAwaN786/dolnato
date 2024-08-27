/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

export default function WeatherWidget({ weatherData }) {
  return (
    <div className="w-full flex rounded-lg bg-auto">
      <div className="rounded-lg p-3 w-full bg-blue-400 opacity-90 text-white">
        {weatherData ? (
          <>
            <div className="mb-10">
              <h2 className=" text-lg leading-none pb-1">
                <svg
                  className=" w-4 inline mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 425.963 425.963"
                  style={{ enableBackground: "new 0 0 425.963 425.963;" }}
                  xml:space="preserve"
                >
                  <g />
                  <g />
                  <path
                    d="M213.285,0h-0.608C139.114,0,79.268,59.826,79.268,133.361c0,48.202,21.952,111.817,65.246,189.081   c32.098,57.281,64.646,101.152,64.972,101.588c0.906,1.217,2.334,1.934,3.847,1.934c0.043,0,0.087,0,0.13-0.002   c1.561-0.043,3.002-0.842,3.868-2.143c0.321-0.486,32.637-49.287,64.517-108.976c43.03-80.563,64.848-141.624,64.848-181.482   C346.693,59.825,286.846,0,213.285,0z M274.865,136.62c0,34.124-27.761,61.884-61.885,61.884   c-34.123,0-61.884-27.761-61.884-61.884s27.761-61.884,61.884-61.884C247.104,74.736,274.865,102.497,274.865,136.62z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  />
                </svg>
                {weatherData?.location?.region}, {weatherData?.location.country}
              </h2>
              <h3 className="leading-none text-sm pl-5">
                Updated a few minutes ago
              </h3>
            </div>

            <div className="flex flex-row gap-2 items-center justify-between">
              <div className="flex flex-row gap-2 items-center">
                <svg
                  className="w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  viewBox="0 0 129 129"
                  enable-background="new 0 0 129 129"
                >
                  <g>
                    <path
                      d="m64.5,92.6c15.5,0 28-12.6 28-28s-12.6-28-28-28-28,12.6-28,28 12.5,28 28,28zm0-47.9c11,0 19.9,8.9 19.9,19.9 0,11-8.9,19.9-19.9,19.9s-19.9-8.9-19.9-19.9c0-11 8.9-19.9 19.9-19.9z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    />
                    <path
                      d="m68.6,23.6v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    />
                    <path
                      d="m60.4,105.6v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    />
                    <path
                      d="m96.4,38.5l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8 0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    />
                    <path
                      d="m23.5,105.6c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    />
                    <path
                      d="m122.5,64.6c0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.8,4.1 4.1,4.1h12.9c2.2,1.42109e-14 4.1-1.8 4.1-4.1z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    />
                    <path
                      d="m10.6,68.7h12.9c2.3,0 4.1-1.8 4.1-4.1 0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.9,4.1 4.1,4.1z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    />
                    <path
                      d="m102.6,106.8c1,0 2.1-0.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.9,1.2 2.9,1.2z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    />
                    <path
                      d="m38.4,38.5c1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"
                      data-original="#000000"
                      className="active-path"
                      data-old_color="#000000"
                      fill="#FFFFFF"
                    />
                  </g>
                </svg>
                <strong className="leading-none text-4xl block ">{weatherData?.current?.temp_c} ºC</strong>
              </div>
              <div className="flex flex-col">
                <p>Wind : {weatherData?.current?.wind_kph}KMPH</p>
                <p>Humidity : {weatherData?.current?.humidity}%</p>
              </div>
            </div>
            <p>{weatherData?.current?.condition?.text}, {weatherData?.location?.localtime}</p>
          </>
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
}
