import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./Layout.module.css";
import Link from "next/link";
import { Brightness6Rounded } from "@material-ui/icons";

const Layout = ({ children, title = "World ranks" }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );
    setTheme(localStorage.getItem("theme"));
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);

    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="70 70 70 70 "
            >
              <g fill-rule="evenodd" clip-rule="evenodd">
                <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
                <path
                  d="M176.473 38.165c-8.602.537-21.92 1.93-51.975 11.929-5.996 1.995-11.447 3.935-16.25 5.668-9.246 3.337-16.549 5.973-22.484 6.774-5.326.719-6.224.425-8.623-.359-.609-.199-1.299-.425-2.142-.667-2.221-.639-4.818-2.325-6.043-3.921-2.844-3.707-4.142-7.354-1.831-14.068 2.044-5.94 4.028-8.181 7.309-9.927.206.138.408.277.605.415.605.424 1.178.823 1.83 1.104.999.43 2.488.727 3.945.456.254.438.592.842 1.011 1.185 1.642 1.346 3.881 1.275 5.342-.158a5.825 5.825 0 0 0 1.451 1.756c2.093 1.716 4.928 1.646 6.741-.167 1.972-1.972 1.576-3.977 1.314-4.748-.257-.758-.709-1.371-1.253-1.872.181-.213.352-.438.496-.684.183-.313.32-.643.425-.978a6.122 6.122 0 0 0 2.215.401c3.037-.016 4.281-1.808 4.676-2.578.988-1.925.434-4.214-.5-5.525-.537-.754-1.238-1.226-1.959-1.549l.031-.084c.322-1.109.578-2.288-.115-3.445-.951-1.583-2.414-2.309-3.482-2.837l-.356-.178c-1.471-.751-2.68-1.173-3.849-1.582-.883-.309-1.716-.599-2.673-1.037-1.23-.563-2.649-.723-3.901-.864-.642-.072-1.718-.194-2.03-.347l.005.003c-4.102-2.219-7.614-1.918-13.434-1.42l-1.537.13c-.854.071-2.018.04-3.25.007-3.033-.082-6.808-.183-10.179 1.05-3.176 1.162-5.207 3.408-6.837 5.214-.894.989-1.738 1.924-2.447 2.294l-2.621 1.339c-3.346 1.688-5.988 3.021-8.177 5.3-3.801 3.957-4.975 7.264-6.217 10.766-.382 1.075-.776 2.187-1.266 3.366-.843 2.032-1.741 3.469-2.609 4.86-1.32 2.114-2.567 4.112-3.023 7.245-.412 2.823.173 4.851.792 6.999.47 1.63 1.002 3.476 1.292 6.258.104 1.003.065 2.086.027 3.133-.058 1.593-.117 3.24.296 4.839 1.111 4.297 4.181 6.242 6.213 7.53.534.338 1.261.799 1.449 1.026a51.225 51.225 0 0 1 1.527 2.848c1.568 3.096 2.67 4.988 7.097 7.864 3.728 2.423 14.065 4.891 22.576 5.389l5.734.194v67.16a1.485 1.485 0 0 1-1.32 1.303H60.89v19.279h54.042v-19.279h-7.352a1.492 1.492 0 0 1-1.309-1.176V82.287c2.557-1.587 5.193-3.217 7.932-4.833 3.674-2.168 7.467-4.556 11.482-7.083 10.928-6.878 24.988-15.408 34.125-19.036 6.648-2.64 7.66-6.854 11.557-8.332 10.805-4.099 5.106-4.838 5.106-4.838z"
                  fill="none"
                />
                <path
                  d="M108.898 167.957H105.3c-.938 0-1.252-.312-1.354-.416-.42-.418-.66-1.307-.66-2.436V86.466l-4.553 2.585c-9.327 5.298-17.03 7.984-22.896 7.984H72.79V165.105c0 2.852-1.261 2.852-2.015 2.852h-6.904V181.27h48.074v-13.313h-3.047z"
                  fill="#668fc9"
                />
                <path
                  d="M100.24 91.702v73.404c0 3.688 1.816 5.898 5.061 5.898h3.598v7.217h-41.98v-7.217h3.856c3.245 0 5.062-2.211 5.062-5.898v-65.021c5.645-.001 14.766-2.612 24.403-8.383z"
                  fill="#004775"
                />
                <path
                  d="M79.387 100.885v66.484c-.236 3.232-2.88 5.52-4.611 5.52h-3.271v2.098l3.758-.016c3.652 0 6.639-4.178 6.639-7.781v-66.791c0-.001-1.965.533-2.515.486z"
                  fill="#9b9ea0"
                  stroke="#004775"
                  stroke-width=".544"
                  stroke-miterlimit="2.613"
                />
                <path
                  d="M86.163 65.493c9.479-1.279 21.765-6.82 39.265-12.563 16.184-5.312 31.246-9.543 42.389-11.143-18.152 4.135-34.797 11.612-46.877 17.238-5.945 2.77-18.242 9.221-24.522 11.529-12.775 4.695-21.005 5.482-29.924 1.861-4.965-2.017-8.244-4.714-10.566-9.688-2.816-3.955-4.227-15.444-.823-24.065-2.371.939-4.588 3.359-5.87 4.552-9.57 8.907-15.433 37.875 14.169 49.735-26.418-1.925-34.092-31.031-23.598-48.559 6.844-11.43 20.763-20.894 36.829-15.073-5.987 2.444-9.344 4.555-12.331 13.234-2.466 7.165-1.474 11.956 2.285 16.855 1.562 2.037 4.627 4.122 7.585 4.973 4.335 1.246 4.644 2.105 11.989 1.114z"
                  fill="#668fc9"
                />
                <path
                  d="M114.592 67.36c2.934-1.616 33.459-16.854 46.609-19.716-18.391 7.297-34.67 19.067-48.516 27.24-16.082 9.491-29.064 17.068-40.182 15.909-3.793-.396-7.384-1.307-10.676-2.958-7.685-3.853-12.834-10.565-14.395-16.634-2.333-9.075-.202-17.307 1.292-20.799-1.117 3.544.395 13.898 5.895 21.282 2.497 3.352 6.517 6.711 10.955 8.438 7.29 2.837 12.369 1.428 19.497-.061 12.204-2.548 22.062-8.591 29.521-12.701z"
                  fill="#004775"
                />
                <path
                  d="M68.065 28.734c6.036-.05 8.426 2.968 9.981 3.637 1.138.489 3.257.54 3.567-.832.487-2.16-1.19-2.646-2.346-3.989-.708-.822.025-1.979 1.029-2.204 2.74-.613 4.286.447 6.176 3.251 1.137 1.687 3.555 1.668 5.516 1.634 1.05-.019 2.034-1.325 1.377-2.54-.435-.804-.151-1.199.979-1.453 1.701-.383 2.389 1.091 4.195 1.082 2.873-.015 2.369-2.535 1.762-3.391-.971-1.364-5.036-.757-4.004-2.798.362-.718 1.286-.176 1.641-1.397.055-.191.266-.954.193-1.076-.578-.96-1.652-1.392-2.64-1.896-2.354-1.203-4.011-1.467-6.405-2.563-1.646-.753-4.592-.478-6.103-1.295-3.615-1.955-6.761-1.482-13.306-.94-3.206.265-8.497-.634-12.65.885-4.271 1.562-6.104 5.874-8.925 7.35-4.541 2.375-7.713 3.648-10.03 6.062-4.46 4.644-4.78 8.153-6.878 13.21-2.218 5.343-4.802 7.036-5.436 11.392-.586 4.019 1.404 5.844 2.099 12.517.287 2.749-.3 5.427.245 7.535 1.277 4.943 6.094 5.653 7.329 7.762 2.816 4.81 2.422 6.326 7.694 9.751 2.878 1.87 12.23 4.391 21.125 4.912-6.148-1.108-14.403-2.99-21.519-14.009-6.324-9.793-5.569-20.088-4.031-25.65 1.134-4.1 1.769-9.107 9.071-16.328 5.163-5.109 10.404-8.537 20.294-8.619z"
                  fill="#a3bee3"
                />
                <path
                  d="M89.822 33.251c.791-1.186 5.879.371 3.427 2.822-1.713 1.714-4.636-1.008-3.427-2.822zM83.372 33.049c.396-.593 2.939.185 1.714 1.411-.857.857-2.319-.503-1.714-1.411z"
                  fill="#a3bee3"
                />
                <path
                  d="M95.063 19.544c-.807 1.613-2.016 2.419-.403 3.226-2.016-.403-.229-2.303-1.613-3.226h2.016zM44.67 35.267c3.628-3.225 9.675-7.66 16.529-8.87-5.241.403-12.901 1.21-16.529 8.87zM92.241 25.591c0 1.209 0 4.031-1.613 3.225s1.613-3.225 1.613-3.225z"
                  fill="none"
                />
                <path
                  d="M32.805 70.008c-3.502-3.7-1.917-9.546-3.031-13.955-.949-3.759-.4-7.737 1.621-10.911 2.301-3.614 3.478-7.265 4.589-11.319.632-2.306 3.349-3.708 5.552-5.148 2.34-1.531 3.914-3.825 6.294-5.25.565-.338 1.449-.782 2.311-.584-2.178.158-3.084 2.141-4.258 3.757-1.85 2.545-5.903 5.888-7.35 8.569-2.699 5.006-3.432 8.563-6.368 13.573-1.588 2.708.057 2.989-.952 5.957-.583 1.719-.687 6.371-.601 8.044.113 2.201-.024 5.479 2.597 6.462-.137.269-.27.537-.404.805zM56.59 21.228c1.141-.754 2.471-.555 3.588-.255.516.139 1.211.351 1.698.469 2.355.57 4.937-.31 7.126.439 1.07.367 2.314 1.075 3.404 1.553 1.683.737 3.617 1.833 5.505 1.271 1.394-.414 3.517-.436 3.051-2.208-.248-.942-1.722-1.597-2.663-1.819-3.266-.77-6.173-.646-9.679-.839-3.954-.219-12.03 1.389-12.03 1.389z"
                  fill="#668fc9"
                />
                <path
                  d="M134.594 180.619h-1.404v-5.234h-.031l-1.871 5.234h-.832l-1.869-5.234h-.033v5.234h-1.404v-6.467h2.268l1.455 3.828 1.455-3.828h2.268v6.467h-.002zm-8.229-5.234h-1.963v5.234h-1.535v-5.234h-1.961v-1.232h5.459v1.232z"
                  fill="#004775"
                />
              </g>
            </svg>
          </a>
        </Link>
        <button className={styles.theme_switcher} onClick={switchTheme}>
          <Brightness6Rounded />
        </button>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>programming with @laleet</footer>
    </div>
  );
};

export default Layout;
