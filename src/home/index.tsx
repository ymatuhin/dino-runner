import { useState } from "preact/hooks";
import { Title, Meta, Link } from "ym/head";
import { Trans } from "ym/i18n";
import { Header } from "ym/ui/header";

function AltLinks({ base, alternate }) {
  return (
    <>
      <Link key={base} rel="alternate" hrefLang="x-default" href={base} />
      {alternate.map(({ lang, path }) => (
        <Link key={path} rel="alternate" hrefLang={lang} href={base + path} />
      ))}
    </>
  );
}

// function Page(Component) {
//   return (props) => (
//     <>
//       <Title>WWW</Title>
//       <AltLinks base="https://qwe" alternate={props.alternate} />
//       <Component {...props}/>
//     </>
//   );
// }

export default function Home({ alternate }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <Title>WWW</Title>
      <div className="bg-gray-50">
        <Header></Header>
        <a href="/404">404</a>
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 w-full h-full" aria-hidden="true">
            <div className="relative h-full">
              <svg
                className="absolute transform right-full translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={784}
                  fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
                />
              </svg>
              <svg
                className="absolute transform left-full -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={784}
                  fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
                />
              </svg>
            </div>
          </div>

          <div className="relative pt-6 pb-16 sm:pb-24">
            <div className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24 sm:px-6">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Data to enrich your</span>
                  <span className="block text-indigo-600">online business</span>
                </h1>
                <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex flex-col" aria-hidden="true">
              <div className="flex-1" />
              <div className="flex-1 flex-grow-[2] w-full bg-gray-800" />
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6">
              <img
                width="900"
                height="225"
                className="relative mx-auto rounded-lg shadow-lg"
                src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
