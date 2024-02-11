function WeatherPage() {
  return (
    <div className="min-h-screen bg-thailand-blue flex items-center justify-center">
      <div className="max-w-4xl w-full mx-6 p-8 py-2 bg-white rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-thailand-blue">
          Thailand Weather Forecast
        </h1>
        <p className="text-gray-800 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
          ullamcorper dolor, et mattis sapien pulvinar vel. Integer sit amet
          nulla id justo sollicitudin accumsan. Suspendisse et risus
          scelerisque, molestie metus ut, viverra ipsum. Mauris nec tellus at
          justo pharetra blandit. Donec vitae velit nisl. Nam sed nisl nec lorem
          vehicula accumsan.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-thailand-blue">
          Today's Forecast
        </h2>
        <p className="text-gray-700 mb-6">
          Sed ac risus ac justo gravida fringilla. Vivamus posuere lorem ut
          turpis convallis scelerisque. Nulla facilisi. Morbi facilisis nisi
          vitae turpis tempus, vel bibendum lectus feugiat.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-thailand-blue">
          Tomorrow's Forecast
        </h2>
        <p className="text-gray-700 mb-6">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nam nec suscipit ipsum. Nulla facilisi.
          Phasellus ac consequat enim. In fermentum augue sit amet quam
          facilisis, id eleifend eros maximus.
        </p>

        <p className="text-gray-700 mt-6">
          Fusce at metus eu justo faucibus dapibus. Duis ut magna sed neque
          dictum aliquam. Nullam hendrerit dui non nibh aliquet, a tincidunt
          lacus lacinia.
        </p>
      </div>
    </div>
  );
}

export default WeatherPage;
