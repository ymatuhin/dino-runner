import { useState } from "preact/hooks";
import { Title, Meta, Link } from "ym/head";
import { Trans } from "ym/i18n";

function AltLinks({ base, alternate }) {
  console.log(`# base, alternate`, base, alternate);
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
      <AltLinks base="https://qwe" alternate={alternate} />

      <div class="bg-slate-500">
        <button onClick={() => setCount(count + 1)}>+++</button>
        <Meta name="description" content="qwe" />
        <h1>
          <Trans path="home.title" value={10}>
            title
          </Trans>
        </h1>
        <h2>
          <Trans path="home.title2" value={1}>
            qwe
          </Trans>
        </h2>
        <p class="uppercase">Home page!</p>
        <a href="/about">about</a>
      </div>
    </>
  );
}
