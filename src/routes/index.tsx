import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { css } from "~/styled-system/css";
import { link, stack } from "~/styled-system/patterns";
import {
    SimpleIconsBookstack,
    SimpleIconsGithub,
    SimpleIconsInstagram, SimpleIconsReadme,
    SimpleIconsStrava,
    SimpleIconsTwitter
} from "~/components/icons";

export default component$(() => {
  return (
    <>
      <div
        class={css({
          height: "screen",
          width: "full",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
          px: 2,
        })}
      >
        <header>
          <h1
            class={css({
              fontSize: "4xl",
              mb: 10,
              textAlign: "center",
              fontWeight: "thin",
              color: "white",
              sm: {
                fontSize: "6xl",
              },
            })}
          >
            Links
          </h1>
        </header>

        <main
          class={stack({
            gap: 4,
            display: "flex",
            flexDirection: "column",
            width: "full",
          })}
        >
          <a
            href="https://hugo.alliau.me"
            class={link({
              color: "#333",
              gap: 2,
            })}
          >
            <SimpleIconsReadme  />
            Blog
          </a>
          <a
            href="https://github.com/Kocal"
            class={link({
              color: "#24292f",
              gap: 2,
            })}
          >
            <SimpleIconsGithub />
            GitHub
          </a>
          <a
            href="https://twitter.com/HugoAlliaume"
            class={link({
              color: "#00acee",
              gap: 2,
            })}
          >
            <SimpleIconsTwitter/>
            Twitter
          </a>
          <a
            href="https://www.instagram.com/thekocal"
            class={link({
              color: "#dd2a7b",
              gap: 2,
            })}
          >
            <SimpleIconsInstagram />
            Instagram
          </a>
          <a
            href="https://www.mangacollec.com/user/kocal/collection"
            class={link({
              color: "#CF000A",
              gap: 2,
            })}
          >
            <SimpleIconsBookstack />
            Mangathèque
          </a>
          <a
            href="https://www.strava.com/athletes/62379808"
            class={link({
              color: "#fc4c02",
              gap: 2,
            })}
          >
              <SimpleIconsStrava />
            Strava
          </a>
        </main>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "My links • Kocal",
  meta: [
    {
      name: "description",
      content: "Links to my social networks, projects, etc.",
    },
    {
      name: "author",
      content: 'Hugo "Kocal" Alliaume',
    },
  ],
};
