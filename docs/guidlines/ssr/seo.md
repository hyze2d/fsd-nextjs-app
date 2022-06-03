## Redirects

For 301, 302 redirects use runtime entry points like getServerSideProps or getInitialProps
For 307, 308 use nextjs redirect configuration

## Robots.txt

Project should have robots.txt configured

```
User-agent: *

Allow: /
```

In case if there's an internal pages which shouldn't be indexed, exclude them in the configuration as well

```
User-agent: *

Disallow: /admin
```

## Sitemap

If there are a lot of pages/a lot of dynamic pages which should be indexed separatly:
generate sitemap file in public/sitemap.xml. Do NOT generate sitemap on the go if there's no really specific needed for that. Usually it's useful for some e-com cases to index shop positions pages for crawlers.

---

In case if you need to generate it on the go, you can do it inside the next page -> pages/sitemap.xml.tsx

## Metatags

Robots. For google specifically you can use "googlebot" name instead of "robots".

```html
<!-- In case if you need to disable the page indexing specifically, you can do this but it's better to decide it inside the robots.txt -->
<meta name="robots" content="noindex,nofollow" />
<!-- Allow indexing of the page. Should be set by default on top level of the app -->
<meta name="robots" content="all" />
```

Google.
Hide searchbox in google search (optional)

```html
<meta name="google" content="nositelinkssearchbox" />
```

Disable google suggestion to "translate this site" (optional)

```html
<meta name="google" content="notranslate" />
```

Page title should be present and ideally depend on what page's now opened

```html
<title>Page title</title>
```

Description meta tag will be shown in search results and also inside the messengers previews

```html
<meta
  name="description"
  content="Something that tells what's the page content has"
/>
```

For more details there's a https://ogp.me/ documentation which describes a metatags which can be used
to provide more info about the page which's gonna affect how website links gonna be displayed in the social media/messengers (facebook, twitter, fb messenger, telegram, discord and others ). Some social media can have own meta tags so it can take some work to research which tags you need specifically

## Canonical Urls

In case of content duplication ( same page content on different urls ) it will be optiomal to add

```html
<link
  rel="canonical"
  href="https://something.com/original-page-url/path/"
  key="canonical"
/>
```

so search engine will not demote the page in indexing or demote all pages with that content.

## Page content

h1 - Should represent what's page about. Other headings are also important but make sure to define correct h1.

For all links, make sure they have href attributes and try to not use programmatic navigation with interactable elements but use a links instead.

Images preferably should be rendered with next Image component since it provides extra set of optimisations

Some content which's not required to be rendered on the server side (for example some clent only widget/non main content/some content which's rendered in the far end of the page and also follows previous cases)

## SEO profiling & Optimisation

To check how well your project runs in terms of SEO you can use tools like googlepagespeed, lighthouse and try follow the advices given by the tools.

## Box

For the default seo configuration you can go to shared/config/seo, there is a default seo config for DefaultSeo component from 'next-seo' which's being used in custom app component.

For the page specific seo, you can create page.seo.tsx file inside the specific page and then use shared/next/seo to create Seo component which can be used in the page component

```tsx
const Seo = seo(); //check possible overloads

const Home = () => {
  return <Seo outer='prop'>{/* page content */}</Seo>;
};
```

#### Refs

https://nextjs.org/learn/seo/introduction-to-seo
https://ogp.me/
https://pagespeed.web.dev/
https://developers.google.com/
https://developers.google.com/
https://github.com/garmeeh/next-seo
