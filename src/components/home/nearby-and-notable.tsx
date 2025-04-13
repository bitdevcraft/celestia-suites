import { Building, Building2, Handshake, Trees, Wine } from "lucide-react";

export default function NearbyAndNotable() {
  return (
    <div className="max-w-7xl mx-auto px-4 my-48">
      <h2 className="text-3xl md:text-5xl font-crimson-text text-center">
        Nearby & Notable
      </h2>
      <p className="text-center w-full md:w-[70%] mx-auto mt-4 font-light">
        Our location blends natural charm with urban convenience
      </p>
      <div className="flex grid grid-cols-12 gap-4 mt-16">
        <div className="col-span-12 md:col-span-6 flex flex-col gap-4 border p-8">
          <h3 className="text-2xl font-crimson-text">Steps Away</h3>
          <div className="flex gap-3 items-center">
            <div>
              <Trees />
            </div>
            <div>
              <h4 className="font-crimson-text text-lg">Riverside</h4>
              <p className="font-light">
                Perfect for morning walks with your pets
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div>
              <Building />
            </div>
            <div>
              <h4 className="font-crimson-text text-lg">Mall</h4>
              <p className="font-light">
                Take a scenic stroll by the bridge and soak in the charm of
                Rockwell
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col gap-4 border p-8">
          <h3 className="text-2xl font-crimson-text">Short Drive</h3>

          <div className="flex gap-3 items-center">
            <div>
              <Handshake />
            </div>
            <div>
              <h4 className="font-crimson-text text-lg">Makati City</h4>
              <p className="font-light">10-15 mins drive</p>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <div>
              <Wine />
            </div>
            <div>
              <h4 className="font-crimson-text text-lg">Poblacion</h4>
              <p className="font-light">5-7 mins drive</p>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <div>
              <Building2 />
            </div>
            <div>
              <h4 className="font-crimson-text text-lg">
                Rockwell Power Plant Mall
              </h4>
              <p className="font-light">3-4 mins drive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
