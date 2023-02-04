# React CV Template

[![Deploy React Vite App to Pages](https://github.com/doppelganger9/react-cv-template/actions/workflows/react-vite.yml/badge.svg)](https://github.com/doppelganger9/react-cv-template/actions/workflows/react-vite.yml)

A React CV Template APP with six different color schemes.

## 2023: Vite and Custom Elements

I migrated the original repository to use Vite and Typescript.

Remade with: `npm create vite@latest react-cv-vite -- --template react-ts`, then I moved all the components and rewrote the styles to make them work with Shadow Tree.

Removed PropTypes and used TypeScript types instead.

The components and themes remain the same.

### Custom Element App

The main App is now exposed as a Custom Element, to be able to embed it as a microfrontend in my blog.

See [`index.html`](./index.html) and [`main.tsx`](./src/main.tsx):

```tsx

class CurriculumVitaeApp extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const root = ReactDOM.createRoot(mountPoint);
    root.render(<CVApp {...data} />);
  }
}
customElements.define('cv-app-root', CurriculumVitaeApp);

```

instead of only mounting the main component using React.

#### about hot reloading

`customElements.define` does not allow redefining custom elements. So, on Stackblitz, for example, hot reloading resulted in error.

- https://stackblitz.com/edit/react-ts-3mkh88

## How to Use

After cloning repository, just:

- `npm install / yarn install`
- `npm start / yarn start`
- `npm build / yarn build`

Edit the JS files under `src/data` folder.

Switch theme by changing this line in `src/App.js`: `import './assets/theme/styles-5.css';`

## Sample Page

- [http://sbaydin.com](http://sbaydin.com/)
- this fork is hosted on GitHub Pages : [https://doppelganger9.github.io/react-cv-template/](https://doppelganger9.github.io/react-cv-template/)

## Credits

- [React](https://facebook.github.io/react/)
- [Theme -  Xiaoying Riley - Orbit Theme](https://github.com/xriley/)
- [Bootstrap](http://getbootstrap.com/)
- [FontAwesome 4](https://fontawesome.com/v4.7.0/)
- [this article](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f) to deploy on GitHub Pages

## Support on Beerpay

The original repository is from sbayd, all credits to him:
Help him out for a couple of :beers:!

[![Beerpay](https://beerpay.io/sbayd/react-cv-template/badge.svg?style=beer-square)](https://beerpay.io/sbayd/react-cv-template)  [![Beerpay](https://beerpay.io/sbayd/react-cv-template/make-wish.svg?style=flat-square)](https://beerpay.io/sbayd/react-cv-template?focus=wish)

## License

None?!