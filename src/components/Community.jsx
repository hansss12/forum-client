import { useSelector } from "react-redux"

export default function Community() {
  const community = useSelector((state) => {
    return state.profileReducer.community
  })
  return (
      <>
          <div className="bg-white">
              <div className="sm:px-6 sm:py-10">
                  <div className="mb-10">
                      <h1 className="text-3xl font-semibold tracking-tight text-[#e7373b] text-center font-serif">
                          Our Community
                      </h1>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">
                      {community.map((data) => {
                          return (
                              <>
                                  <div className="group relative" key={data.id}>
                                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 h-60">
                                          <img
                                              src={data.img}
                                              alt="Image"
                                              className="h-full w-full object-center"
                                          />
                                      </div>
                                      <div className="mt-4 flex justify-start">
                                          <h1 className="text-black text-xl font-semibold">
                                              {data.title}
                                          </h1>
                                      </div>
                                      <div>
                                          <h1 className="text-black text-m font-light mt-3">
                                              {data.desc}
                                          </h1>
                                      </div>
                                      <div className="flex">
                                          <h1 className="text-[#e7373b] font-semibold text-xl mt-2 pr-2">
                                              {data.type}
                                          </h1>
                                      </div>
                                  </div>
                              </>
                          );
                      })}
                  </div>
              </div>
          </div>
      </>
  );
}