# NextJS

NextJS allows to SSR app pages so it's gonna be suitable for a SEO.

Since nextjs enforces file structure based routing and own folder for it it makes hard to combine it with self defined file structure for a projects, because of that it has been decided that nextjs page gonna have responsiblity only for the composition of app views/models into a output that nextjs wants from us.

First of all
/src/pages -> app pages
/pages -> place where we should compose pages for nextjs

To simplify process of working with effectorjs there's a nextjs-effector package which provides simplification in terms of managing scope/providing factories for the getServerSideProps/getStaticProps/getInitialProps.

/app/layouts contains layout defenitions with a shared events that should be triggered and getLayout function which's gonna be used in custom _app.
layouts created via createLayout function from /shared/lib/factories, created layout has createNextPage method which we can use in /pages to compose everything we need

```tsx
import { baseLayout } from '@app/layouts/base';
import { $$homePage, Home } from '@pages/home';

// gip/gssp/gsp possible fields to put page started event
// getServerSideProps, getStaticProps are return from createNextPage along with the Page component
// all 3 can be exported from file
// be aware, that until you provide corresponding event, getServerSideProps, getStaticProps, getInitialProps are not gonna be generated
const { Page, getServerSideProps, getStaticProps } = baseLayout.createNextPage(Home, {
  gip: $$homePage.enter,

  pathname: '/'
});

export default Page;
// export { getStaticProps }
// export { getServerSideProps }
```


## GetStaticProps

You should consider using GSP when your page has either *static* content or content that's not updated too often.
Let's take as an example some kind of posts pages, posts being added but usually not being updated afterwards, so you can pre-render them via GSP + getstaticpaths or via ISR with revalidate with some suitable for you cooldown to make your page re-render pereiodically.


## GetServerSideProps 

Get server side props can be used for the pages which has dynamic content that's being updated often. GSSP can also have some performance issues on the client side (for example if your users have really slow connection speed, your data api calls can be faster if you perform them on the remote server where your nextjs app is deployed.). With GSSP you can also enable caching with Cache-Control header.


## GetInitialProps

While GSSP is recommended over GIP, GIP doesnt have any noticable flows and can help you to organise your SSR more optimally in terms of server loads. With GIP which's called on both server and client (if it's first load, it runs on server if user changed a route via link/programmatic navigation GIP executes on the client side). In both cases GSSP & GIP work fine in terms of SEO so you can choose whatever suits your case better (GIP is easier to use tho, because you dont need to re-fetch some general data everytime you load new page, because that data can be loaded on the first render).


## Client Side Rendering

You should consider running full CSR for pages that are locked behind authorization because you dont really need to provide any SEO for those pages, you still could consider rendering them on the server side because of reasons mentioned before but you most likely dont want to do that. 
Also, if your page is a hybrid in terms of having auth depended data, you can load some data on the server side and then fetch all you need on client while enabling some kind of preloader on the page parts where you need to fetch more data.

## Programmatic routing

Sometimes you need to invoke route change manually w/o user interaction with link element. Next has global router instance and you can use it to trigger route change manually. 
There's a /src/shared/lib/router with pushFx if you want to use push action as an effect