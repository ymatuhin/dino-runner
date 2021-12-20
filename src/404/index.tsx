import { Title } from "ym/head";
import { Trans } from "ym/i18n";

export default function NotFound() {
  return (
    <div class="bg-slate-500">
      <Title>404</Title>
      <h1>404</h1>
      <Trans path="home.title" value={10}>
        title
      </Trans>
    </div>
  );
}
