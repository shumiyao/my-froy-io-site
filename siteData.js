var siteData = {"logoImageUrl":"storage/uploads/images/thumbnail/null","projectTitle":"My froy.io site","templateName":"Distinctif","templateVariationName":"Liquorice","siteEmail":"","facebookPageName":"","instagramAccountName":"","twitterAccountName":"","youtubeChannelUrl":"","cookieConsent":false,"copyrightStatement":"","siteSettings_navigation":[{"id":1,"home":true,"name":"Home","show":true,"is_home":0,"item_type":"page"}],"pages":[{"id":1,"title":"Home","description":"","settings_page":null,"featured_media_id":null,"featured_media_path":null,"is_home":0,"user_id":1,"project_id":1,"created_at":"2021-05-26T17:11:23.000Z","updated_at":"2021-05-27T17:45:39.000Z","show":1,"published_at":null,"slug":"","blocks":[{"id":"yIaQwUoWgq","data":{"show":false,"text":"Sample title test","level":2,"teaser":false},"type":"header"},{"id":"iBNXS9RtBG","data":{"text":"Sample paragraph","align":"left","teaser":false},"type":"paragraph"},{"id":"peqwJF4guv","data":{"text":"Sample paragraph","align":"left","teaser":false},"type":"paragraph"},{"id":"Q-Q5RnFEqw","data":{"text":"","align":"left","teaser":false},"type":"paragraph"}]}],"components":{"section":{"header":{"name":"header","template":"\n  <header class=\"h-24 mb-0 flex items-center relative top-0 z-50\" :class=\"backgroundColor\">\n    <div class=\"w-full\">\n      <div class=\"w-full mx-auto flex flex-wrap justify-between\">\n        <div class=\"pl-8 flex mr-auto\">\n          <div v-if=\"logoImageUrl\" class=\"flex mr-auto text-left\">\n            <img :src=\"logoImageUrl\" class=\"fill-current w-24\" :alt=\"projectTitle || ''\">\n          </div>\n          <div v-else=\"\" class=\"flex mr-auto text-left\">\n            <h2 class=\"font-bold text-xl tracking-widest\" :class=\"logoColor\">\n              <a href=\"/\">{{ templateName }}</a>\n            </h2>\n          </div>\n        </div>\n        <button aria-label=\"show navigation\" class=\"navigation-show w-10 mr-6 ml-auto block relative md:hidden focus:outline-none\" :class=\"{'active': showMenu}\" @click=\"showMenu = !showMenu\">\n          <span class=\"w-6 h-2px mx-auto mb-5px block relative pointer-events-none origin-center\" :class=\"toggleMenuColor\"></span>\n\n          <span class=\"w-6 h-2px mx-auto mb-5px block relative pointer-events-none origin-center\" :class=\"toggleMenuColor\"></span>\n\n          <span class=\"w-6 h-2px mx-auto mb-5px block relative pointer-events-none origin-center\" :class=\"toggleMenuColor\"></span>\n        </button>\n        <nav class=\"w-full md:w-auto md:flex md:px-8 md:m-0 relative\" :class=\"{'hidden': !showMenu}\">\n          <ul class=\"w-full md:w-auto flex flex-wrap flex-col md:flex-row items-end md:items-center px-8 py-4 -mr-4 md:-mr-6 ml-auto absolute md:relative md:bg-transparent md:p-0\" :class=\"backgroundColor\">\n            <li v-for=\"pageMenuItem in siteSettings_navigation\" :key=\"pageMenuItem.id\" class=\"flex justify-end md:px-6 mb-4 md:m-0\">\n              <a :href=\"\n                  pageMenuItem.custom && pageMenuItem.custom === true\n                    ? pageMenuItem.url\n                    : 'javascript:void(0)'\n                \" :target=\"pageMenuItem.custom && pageMenuItem.custom === true ? '_blank' : ''\" class=\"text-md opacity-50 hover:opacity-100 transition-all duration-300 ease-in\" :class=\"[\n                  navColor,\n                  $route.path == pageMenuItem.id ? navColorActive + ' opacity-100' : '',\n                  parseInt($route.params.pageId, 10) === pageMenuItem.id ? navColorActive + ' opacity-100' : ''\n                ]\" @click=\"directToPage(pageMenuItem.id)\" v-html=\"pageMenuItem.name\"></a>\n            </li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n  </header>\n","props":"{\"backgroundColor\":{\"default\":\"bg-white\"},\"logoColor\":{\"default\":\"text-black\"},\"toggleMenuColor\":{\"default\":\"bg-black\"},\"navColor\":{\"default\":\"text-black hover:text-black\"},\"navColorActive\":{\"default\":\"text-black\"}}","data":"{\"showMenu\":false}"},"masthead":{"name":"masthead","template":"\n  <section class=\"masthead w-full px-0 mx-auto mb-32 relative\" :class=\"[\n      {'h-masthead lazyload-image -mt-20': imageUrl}]\">\n    <div class=\"w-full mx-auto absolute\" :class=\"[\n        {'h-masthead': imageUrl}]\">\n      <div v-if=\"imageUrl\" class=\"w-full md:w-6/12 h-full mx-auto relative\" :class=\"[\n          {[backgroundColor]: imageUrl}]\">\n        <div class=\"masthead-image image-container w-full h-full relative\" :class=\"[\n            {[backgroundColor]: imageUrl}]\">\n          <img :src=\"`data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 0 0'%2F%3E`\" class=\"w-full h-full object-cover\" :alt=\"content\" :data-src=\"originalImageDirPath + imageUrl\">\n\n          <div v-if=\"imageUrl\" class=\"media-overlay w-full h-full absolute top-0 right-0\" :class=\"overlayColor\">\n          </div>\n        </div>\n      </div>\n      <div class=\"w-full h-full flex absolute top-0 z-10 items-center\">\n        <h1 class=\"max-w-8xl mx-auto leading-none text-center uppercase\" :class=\"[\n            {[textColor]: !imageUrl},\n            {[textAltColor]: imageUrl},\n            {'text-3xl md:text-4xl': !imageUrl},\n            {'text-3xl md:text-4xl': imageUrl}]\" v-html=\"content\"></h1>\n      </div>\n    </div>\n  </section>\n","props":"{\"backgroundColor\":{\"default\":\"\"},\"overlayColor\":{\"default\":\"bg-black\"},\"textColor\":{\"default\":\"text-black\"},\"textAltColor\":{\"default\":\"text-white\"},\"imageUrl\":{\"default\":\"\"},\"content\":{\"default\":\"\"}}","data":false},"footer":{"name":"footer","template":"\n  <footer class=\"pt-20 text-left pb-8\" :class=\"backgroundColor\">\n    <div class=\"w-full px-8 mx-auto flex flex-col items-center\">\n      <div class=\"mb-4 ml-auto text-sm\">\n        <span class=\"opacity-50\" :class=\"textColor\">\n          {{ copyrightStatement }}\n        </span>\n        <a v-for=\"footerMenuItem in footerSettings_navigation\" :key=\"footerMenuItem.id\" :href=\"\n            footerMenuItem.custom && footerMenuItem.custom === true\n              ? footerMenuItem.url\n              : 'javascript:void(0)'\n          \" class=\"ml-1 opacity-50 hover:opacity-100 transition-all duration-300 ease-in\" :class=\"[\n            navColor,\n            $route.path == footerMenuItem.id ? navColorActive + ' opacity-100' : '',\n          ]\" @click=\"directToPage(footerMenuItem.id)\" v-html=\"footerMenuItem.name\"></a>\n      </div>\n      <ul class=\"flex -mx-3 ml-auto\">\n        <li v-show=\"facebookPageName && facebookPageName !== ''\" class=\"mx-3\">\n          <a :href=\"`https://facebook.com/${facebookPageName}`\" :class=\"navColor\" aria-label=\"visit facebook\">\n            <svg class=\"fill-current w-6 opacity-50 hover:opacity-100 transition-all duration-300 ease-in\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\">\n              <path d=\"M57.378.001H3.352A3.352 3.352 0 000 3.353v54.026a3.353 3.353 0 003.352 3.354h29.086V37.214h-7.914v-9.167h7.914v-6.76c0-7.843 4.789-12.116 11.787-12.116 3.355 0 6.232.251 7.071.36v8.198l-4.854.002c-3.805 0-4.539 1.809-4.539 4.462v5.851h9.078l-1.187 9.166h-7.892v23.52h15.475a3.355 3.355 0 003.355-3.351V3.351a3.352 3.352 0 00-3.354-3.35z\"></path>\n            </svg>\n          </a>\n        </li>\n        <li v-show=\"instagramAccountName && instagramAccountName !== ''\" class=\"mx-3\">\n          <a :href=\"`https://instagram.com/${instagramAccountName}`\" :class=\"navColor\" aria-label=\"visit instagram\">\n            <svg class=\"fill-current w-6 opacity-50 hover:opacity-100 transition-all duration-300 ease-in\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 169.063 169.063\">\n              <path d=\"M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z\"></path>\n              <path d=\"M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zM129.921 28.251c-2.89 0-5.729 1.17-7.77 3.22-2.051 2.04-3.23 4.88-3.23 7.78 0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z\"></path>\n            </svg>\n          </a>\n        </li>\n        <li v-show=\"twitterAccountName && twitterAccountName !== ''\" class=\"mx-3\">\n          <a :href=\"`https://twitter.com/${twitterAccountName}`\" :class=\"navColor\" aria-label=\"visit twitter\">\n            <svg class=\"fill-current w-6 opacity-50 hover:opacity-100 transition-all duration-300 ease-in\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n              <path d=\"M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z\"></path>\n            </svg>\n          </a>\n        </li>\n        <li v-show=\"youtubeChannelUrl && youtubeChannelUrl !== ''\" class=\"mx-3\">\n          <a :href=\"youtubeChannelUrl\" :class=\"navColor\" aria-label=\"visit youtube\">\n            <svg class=\"fill-current w-6 opacity-50 hover:opacity-100 transition-all duration-300 ease-in\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n              <path d=\"M490.24 113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936 80.864 322.848 80 256.064 80c-66.912 0-144.032.864-174.656 2.912-30.624 1.76-45.728 6.272-59.744 31.008C7.36 138.592 0 181.088 0 255.904v.256c0 74.496 7.36 117.312 21.664 141.728 14.016 24.704 29.088 29.184 59.712 31.264C112.032 430.944 189.152 432 256.064 432c66.784 0 143.872-1.056 174.56-2.816 30.688-2.08 45.76-6.56 59.648-31.264C504.704 373.504 512 330.688 512 256.192v-.16-.096c0-74.848-7.296-117.344-21.76-142.016zM192 352V160l160 96-160 96z\"></path>\n            </svg>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </footer>\n","props":"{\"backgroundColor\":{\"default\":\"bg-white\"},\"textColor\":{\"default\":\"text-black\"},\"navColor\":{\"default\":\"text-black hover:text-black\"},\"navColorActive\":{\"default\":\"text-black\"}}","data":false}},"block":{"blockquote":{"name":"blockquote","template":"\n  <blockquote class=\"max-w-6xl px-8 mx-auto mb-16 flex text-xl md:text-2xl relative leading-snug text-left\">\n    <span class=\"relative z-10 leading-snug\" :class=\"color\" v-html=\"content\"></span>\n    <span v-show=\"iconShow\" class=\"min-w-24 md:min-w-64 h-24 absolute opacity-10 right-0\" :class=\"iconBackgroundColor\">\n      <svg class=\"w-16 md:w-32\" :class=\"iconColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n        <path d=\"M23.7 22.5h-9.2c-.1-.2-.1-.3-.1-.4 0-3.8-.1-7.6.1-11.3.3-4.8 4.3-8.8 9.3-9.3v3.8c0 .2-.4.6-.7.7-2.6 1.3-3.8 3.3-3.6 6.4H23.8c-.1 3.4-.1 6.7-.1 10.1zM5.2 12.5h4.3v10H.3c0-.2-.1-.3-.1-.5 0-3.5-.1-7 0-10.4.2-5.1 3.9-9.2 8.9-10h.4v3.7c0 .2-.3.6-.5.7-2.9 1.1-3.8 3.4-3.8 6.5z\"></path>\n      </svg>\n    </span>\n  </blockquote>\n","props":"{\"iconShow\":{\"default\":false},\"color\":{\"default\":\"\"},\"iconBackgroundColor\":{\"default\":\"\"},\"iconColor\":{\"default\":\"text-black\"},\"content\":{\"default\":\"\"}}","data":false},"delimiter":{"name":"delimiter","template":"\n\n  <div class=\"max-w-6xl px-8 mx-auto my-16 flex\">\n    <hr class=\"w-64 h-1 mx-auto opacity-50\" :class=\"backgroundColor\">\n  </div>\n\n","props":"{\"backgroundColor\":{\"default\":\"bg-white\"}}","data":false},"grid":{"name":"grid","template":"\n  <ul class=\"grid grid-projects mx-auto px-8 mt-4 mb-16\" :class=\"[\n      gridColumns,\n      {'gap-8 md:gap-24': gaps},\n      {'max-w-6xl': !stretched}]\" :data-aspect=\"aspectRatio\" :data-grid-gap=\"gaps\">\n    <slot></slot>\n  </ul>\n","props":"{\"gridColumns\":{\"default\":\"grid-cols-2 md:grid-cols-3\"},\"gaps\":{\"default\":true},\"stretched\":{\"default\":false},\"aspectRatio\":{\"default\":1.5}}","data":false},"grid-filter":{"name":"grid-filter","template":"\n  <ul class=\"grid-filter py-6 mx-auto flex justify-center text-sm uppercase sticky top-24 z-10\" :class=\"[\n      {'max-w-6xl px-8': !stretched},\n      backgroundColor,\n      {'px-8': stretched}\n    ]\">\n    <slot></slot>\n  </ul>\n","props":"{\"stretched\":{\"default\":false},\"backgroundColor\":{\"default\":\"\"}}","data":false},"grid-filter-item":{"name":"grid-filter-item","template":"\n  <li class=\"py-1 p-2 cursor-pointer transition-all duration-300 ease-in\" :class=\"[\n      filterClasses.filterColor,\n      $parent.$parent.filter == link ? filterClasses.filterColorActive + ' opacity-100 crossed' : '',\n    ]\" @click=\"$parent.$parent.updateFilter(link)\">\n    <slot></slot>\n  </li>\n","props":"{\"filterClasses\":{},\"filterColor\":{\"default\":\"text-black hover:text-black\"},\"filterColorActive\":{\"default\":\"text-black\"},\"link\":{\"default\":\"\"}}","data":false},"grid-item":{"name":"grid-item","template":"\n  <li class=\"grid-item relative\" :class=\"[\n      index === 0 ? 'grid-sizer' : '',\n      columns >= 2 ? 'col-span-2' : '',\n      `md:col-span-${columns}`,\n      `row-span-${rows}`,\n      `type-${type}`,\n      backgroundColor\n    ]\">\n\n    <!-- project grid item -->\n    <figure v-if=\"type === 'project'\" class=\"flex h-full relative\">\n      <a v-if=\"!imageUrl\" :href=\"link\" aria-label=\"project link\">\n        <froyio-grid-rollover :caption=\"caption\" :caption-color=\"captionColor\"></froyio-grid-rollover>\n      </a>\n      <a v-else=\"\" :href=\"link\" aria-label=\"project link\">\n        <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\" :data-src=\"originalImageDirPath + imageUrl\" :alt=\"caption\">\n        <froyio-grid-rollover :caption=\"caption\" :caption-color=\"captionColor\"></froyio-grid-rollover>\n      </a>\n    </figure>\n\n    <!-- instagram -->\n    <template v-if=\"type === 'instagram'\">\n\n      <!-- instagram video grid item -->\n      <figure v-if=\"mediaType === 'VIDEO'\" class=\"relative flex items-center justify-center overflow-hidden\">\n        <a :href=\"link\" rel=\"nofollow noopener\" aria-label=\"instagram link\" @click=\"toggleMediaStatus($event)\">\n          <div class=\"video-wrapper\">\n            <video class=\"video\" loop=\"\" playsinline=\"\" preload=\"none\" :poster=\"imageUrl.replace(/&/g, '&')\">\n              <source :data-src=\"mediaUrl.replace(/&/g, '&')\">\n            </video>\n          </div>\n          <froyio-grid-rollover :video=\"mediaType === 'VIDEO'\" :caption=\"caption\" :caption-color=\"captionColor\" :playing=\"false\" progress-background-color=\"bg-gray-300\"></froyio-grid-rollover>\n        </a>\n      </figure>\n\n      <!-- instagram image grid item -->\n      <figure v-else=\"\">\n        <a :href=\"link\" target=\"_blank\" rel=\"nofollow noopener\" aria-label=\"instagram link\">\n          <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\" :data-src=\"imageUrl\" :alt=\"caption\">\n          <froyio-grid-rollover :caption=\"caption\" :caption-color=\"captionColor\"></froyio-grid-rollover>\n        </a>\n      </figure>\n    </template>\n\n    <!-- video -->\n    <figure v-if=\"type === 'video'\">\n      <a :href=\"embedURL(link)\" class=\"glightbox\" data-type=\"external\" data-width=\"900\" data-height=\"500\" rel=\"noopener\" aria-label=\"video link\">\n        <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\" :data-src=\"originalImageDirPath + imageUrl\" :alt=\"caption\">\n        <froyio-grid-rollover :video=\"type === 'video'\" :caption=\"caption\" :caption-color=\"captionColor\"></froyio-grid-rollover>\n      </a>\n    </figure>\n\n    <!-- images -->\n    <figure v-if=\"type === 'image'\">\n      <a :href=\"link || originalImageDirPath + imageUrl\" :class=\"{'glightbox': !link}\" data-type=\"image\" data-width=\"900\" data-height=\"500\" rel=\"noopener\" aria-label=\"image link\">\n        <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\" :data-src=\"originalImageDirPath + imageUrl\" :alt=\"caption\">\n        <froyio-grid-rollover :caption=\"caption\" :caption-color=\"captionColor\"></froyio-grid-rollover>\n      </a>\n    </figure>\n\n  </li>\n","props":"{\"index\":{\"default\":0},\"columns\":{\"default\":1},\"rows\":{\"default\":1},\"type\":{\"default\":\"Project\"},\"backgroundColor\":{\"default\":\"\"},\"imageUrl\":{\"default\":\"\"},\"mediaType\":{\"default\":\"\"},\"mediaUrl\":{\"default\":\"\"},\"link\":{\"default\":\"\"},\"caption\":{\"default\":\"\"},\"captionColor\":{\"default\":\"text-white\"}}","data":false},"grid-rollover":{"name":"grid-rollover","template":"\n\n  <!-- Just rollover -->\n  <div v-if=\"caption === '' && !video\" class=\"rollover\"></div>\n\n  <!-- Image with caption -->\n  <figcaption v-else-if=\"!video\" class=\"rollover\" :class=\"captionColor\">\n    <span class=\"caption\">\n      <span class=\"pl-0 text-sm md:text-lg\">\n        {{ caption }}\n      </span>\n    </span>\n  </figcaption>\n\n  <!-- Video with/without caption -->\n  <figcaption v-else-if=\"video\" class=\"rollover\">\n    <div class=\"w-full flex flex-col pointer-events-none\">\n      <span class=\"play-media w-12 h-12 flex items-center mb-2 rounded-full relative overflow-hidden\" :class=\"playBackgroundColor\">\n        <span class=\"progress-bar w-0 h-12 block absolute left-0 bottom-0 z-0 transition-all duration-75\" :class=\"progressBackgroundColor\"></span>\n        <svg class=\"play-icon w-10 mx-auto relative z-1 fill-current\" :class=\"playIconColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\">\n          <path d=\"M12.1 19.5v-9.2l7.2 4.6z\"></path>\n        </svg>\n        <svg class=\"pause-icon w-10 mx-auto relative z-1 fill-current hidden\" :class=\"playIconColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\">\n          <path d=\"M11.9 10.7h2.2v8.6h-2.2zM15.8 10.7H18v8.6h-2.2z\"></path>\n        </svg>\n      </span>\n      <span v-if=\"caption !== ''\" class=\"caption\" :class=\"captionColor\">\n        <span class=\"pl-0 text-sm md:text-lg\">\n          {{ caption }}\n        </span>\n      </span>\n    </div>\n  </figcaption>\n\n","props":"{\"video\":{\"default\":false},\"caption\":{\"default\":\"\"},\"captionColor\":{\"default\":\"text-white\"},\"playBackgroundColor\":{\"default\":\"border border-white\"},\"playIconColor\":{\"default\":\"text-white\"},\"progressBackgroundColor\":{\"default\":\"bg-black\"},\"playing\":{\"default\":false}}","data":"{\"isPlaying\":false}"},"heading":{"name":"heading","template":"\n\n  <!-- h1 -->\n  <h1 v-if=\"level == 1\" class=\"max-w-6xl px-8 mx-auto mb-8 text-3xl font-semibold leading-snug text-center\" :class=\"color\" v-html=\"content\"></h1>\n\n  <!-- h2 -->\n  <h2 v-else-if=\"level == 2\" class=\"max-w-6xl px-8 mx-auto mb-8 text-2xl font-semibold leading-snug text-center\" :class=\"color\" v-html=\"content\"></h2>\n\n  <!-- h3 -->\n  <h3 v-else-if=\"level == 3\" class=\"max-w-6xl px-8 mx-auto mb-8 text-xl font-semibold leading-snug text-center\" :class=\"color\" v-html=\"content\"></h3>\n\n  <!-- h4 -->\n  <h4 v-else-if=\"level == 4\" class=\"max-w-6xl px-8 mx-auto mb-8 text-lg font-semibold leading-snug text-center\" :class=\"color\" v-html=\"content\"></h4>\n\n  <!-- h5 -->\n  <h5 v-else-if=\"level == 5\" class=\"max-w-6xl px-8 mx-auto mb-8 text-base font-semibold leading-snug text-center\" :class=\"color\" v-html=\"content\"></h5>\n\n  <!-- h6 -->\n  <h6 v-else-if=\"level == 6\" class=\"max-w-6xl px-8 mx-auto mb-8 text-tiny font-semibold leading-snug text-center\" :class=\"color\" v-html=\"content\"></h6>\n\n","props":"{\"level\":{\"default\":2},\"color\":{\"default\":\"text-black\"},\"content\":{\"default\":\"\"}}","data":false},"list":{"name":"list","template":"\n\n  <!-- Ul -->\n  <ul v-if=\"type == 'ul'\" class=\"max-w-5xl px-8 mx-auto mb-8 text-lg leading-loose text-center\" :class=\"color\">\n    <slot></slot>\n  </ul>\n\n  <!-- Ol -->\n  <ol v-else=\"\" class=\"max-w-5xl px-8 mx-auto mb-8 list-decimal list-inside text-lg leading-loose text-center\" :class=\"color\">\n    <slot></slot>\n  </ol>\n\n","props":"{\"type\":{\"default\":\"ul\"},\"color\":{\"default\":\"\"}}","data":false},"pagination":{"name":"pagination","template":"\n  <nav class=\"my-16\">\n    <ul class=\"max-w-6xl px-8 md:pr-40 flex flex-col md:flex-row items-center justify-between mx-auto\">\n      <li>\n        <a href=\"#\" class=\"p-2 mb-2 md:p-0 md:mb-0 inline-block opacity-50 hover:opacity-100 transition-all duration-300 ease-in\" :class=\"[\n            paginationClasses.navColor,\n          ]\">\n          Prev: {{ prevArticle }}\n        </a>\n      </li>\n      <li>\n        <a href=\"/liquorice/work\" class=\"p-2 mb-2 md:p-0 md:mb-0 inline-block opacity-50 hover:opacity-100 transition-all duration-300 ease-in\" :class=\"[\n            paginationClasses.navColor,\n          ]\">{{ returnHome }}</a>\n      </li>\n      <li>\n        <a href=\"#\" class=\"p-1 mb-2 md:p-0 md:mb-0 inline-block opacity-50 hover:opacity-100 transition-all duration-300 ease-in\" :class=\"[\n            paginationClasses.navColor,\n          ]\">\n          Next: {{ nextArticle }}\n        </a>\n      </li>\n    </ul>\n  </nav>\n","props":"{\"paginationClasses\":{},\"navColor\":{\"default\":\"text-black hover:text-black\"}}","data":"{\"prevArticle\":\"Bilbao\",\"nextArticle\":\"Milan\",\"returnHome\":\"All work\"}"},"paragraph":{"name":"paragraph","template":"\n  <p class=\"max-w-4xl px-8 mx-auto mb-12 text-lg text-center\" :class=\"color\" v-html=\"content\"></p>\n","props":"{\"color\":{\"default\":\"\"},\"content\":{\"default\":\"\"}}","data":false},"paywall":{"name":"paywall","template":"\n  <transition name=\"paywall-reveal\" appear=\"\">\n    <div class=\"paywall w-full flex items-center fixed bottom-0 z-10\" :class=\"wrapperColor\">\n      <div class=\"max-w-6xl mx-auto px-8\">\n        <h2 class=\"text-2xl leading-snug\" :class=\"titleColor\">{{ pageTitle }}</h2>\n        <p :class=\"textColor\">{{ contentDescription }}</p>\n        <stripe-checkout ref=\"checkoutRef\" mode=\"payment\" :pk=\"publishableKey\" :line-items=\"lineItems\" :success-url=\"successURL\" :cancel-url=\"cancelURL\" :client-reference-id=\"clientReferenceId\" @loading=\"v => loading = v\"></stripe-checkout>\n        <button class=\"py-2 px-10 mt-4\" :class=\"buttonColor\" @click=\"submit\">€ {{ price }} - {{ buttonLabel }}</button>\n        <div class=\"payment-info mt-8\">\n          <p class=\"text-sm leading-tight\">Pay once and receive lifetime access by email. <a :href=\"termsUrl\" class=\"underline\">Terms of sale</a>. <a :href=\"privacyUrl\" class=\"underline\">Privacy policy</a>.<br>Secure payments through <svg class=\"w-12 inline\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 468 222.5\">\n            <path class=\"st0\" d=\"M414 113.4c0-25.6-12.4-45.8-36.1-45.8-23.8 0-38.2 20.2-38.2 45.6 0 30.1 17 45.3 41.4 45.3 11.9 0 20.9-2.7 27.7-6.5v-20c-6.8 3.4-14.6 5.5-24.5 5.5-9.7 0-18.3-3.4-19.4-15.2h48.9c0-1.3.2-6.5.2-8.9zm-49.4-9.5c0-11.3 6.9-16 13.2-16 6.1 0 12.6 4.7 12.6 16h-25.8zM301.1 67.6c-9.8 0-16.1 4.6-19.6 7.8l-1.3-6.2h-22v116.6l25-5.3.1-28.3c3.6 2.6 8.9 6.3 17.7 6.3 17.9 0 34.2-14.4 34.2-46.1-.1-29-16.6-44.8-34.1-44.8zm-6 68.9c-5.9 0-9.4-2.1-11.8-4.7l-.1-37.1c2.6-2.9 6.2-4.9 11.9-4.9 9.1 0 15.4 10.2 15.4 23.3 0 13.4-6.2 23.4-15.4 23.4zM223.8 61.7l25.1-5.4V36l-25.1 5.3zM223.8 69.3h25.1v87.5h-25.1zM196.9 76.7l-1.6-7.4h-21.6v87.5h25V97.5c5.9-7.7 15.9-6.3 19-5.2v-23c-3.2-1.2-14.9-3.4-20.8 7.4zM146.9 47.6l-24.4 5.2-.1 80.1c0 14.8 11.1 25.7 25.9 25.7 8.2 0 14.2-1.5 17.5-3.3V135c-3.2 1.3-19 5.9-19-8.9V90.6h19V69.3h-19l.1-21.7zM79.3 94.7c0-3.9 3.2-5.4 8.5-5.4 7.6 0 17.2 2.3 24.8 6.4V72.2c-8.3-3.3-16.5-4.6-24.8-4.6C67.5 67.6 54 78.2 54 95.9c0 27.6 38 23.2 38 35.1 0 4.6-4 6.1-9.6 6.1-8.3 0-18.9-3.4-27.3-8v23.8c9.3 4 18.7 5.7 27.3 5.7 20.8 0 35.1-10.3 35.1-28.2-.1-29.8-38.2-24.5-38.2-35.7z\"></path>\n          </svg></p>\n        </div>\n      </div>\n    </div>\n  </transition>\n","props":"{\"wrapperColor\":{\"default\":\"bg-black bg-opacity-90\"},\"titleColor\":{\"default\":\"text-pink-oyster\"},\"textColor\":{\"default\":\"text-white\"},\"buttonColor\":{\"default\":\"bg-pink-oyster text-black center\"},\"termsUrl\":{\"default\":\"/terms-of-sale/\"},\"privacyUrl\":{\"default\":\"/privacy-policy/\"},\"successUrl\":{\"default\":\"http://localhost:3000/\"},\"cancelUrl\":{\"default\":\"http://localhost:3000/\"}}","data":"{\"pageTitle\":\"How to make that moneyshot\",\"contentDescription\":\"An extended tutorial on how do a professional photoshoot without a big budget.\",\"price\":2.99,\"buttonLabel\":\"buy access\",\"publishableKey\":\"pk_test_51IYVf3IhjzKcSOScL57HR5mkXi1XWiupdvMSx7LOmcvt2Z9kcXcB6HfHDO9YEbg4WyfLVL2vlwWdCfOgug7Z2aqx00SuTVcv6O\",\"lineItems\":[{\"price\":\"price_1IYXv3IhjzKcSOSc1sGFIDSR\",\"quantity\":1}],\"clientReferenceId\":\"test-page-id-1\"}"},"thumbnail":{"name":"thumbnail","template":"\n  <div class=\"px-8 mb-16 mx-auto relative\" :class=\"{'max-w-6xl': !stretched}\">\n    <div class=\"mx-auto\" :style=\"!stretched ? `max-width:${width}px` : 'max-width:none'\">\n      <div class=\"lazyload-image relative\">\n        <div :class=\"backgroundColor\">\n          <div class=\"image-container mx-auto\">\n            <img :src=\"`data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 ${width} ${height}'%2F%3E`\" :class=\"{'w-full': stretched && width >= height}\" :width=\"width\" :height=\"height\" :alt=\"caption\" :data-src=\"imageUrl\">\n          </div>\n        </div>\n      </div>\n      <p v-if=\"caption !== ''\" class=\"mt-2 italic text-right\">{{ caption }}</p>\n    </div>\n  </div>\n","props":"{\"stretched\":{\"default\":false},\"width\":{\"default\":500},\"height\":{\"default\":300},\"backgroundColor\":{\"default\":\"\"},\"imageUrl\":{\"default\":\"\"},\"caption\":{\"default\":\"Caption\"}}","data":false},"video":{"name":"video","template":"\n  <div class=\"px-8 mb-16 mx-auto relative\" :class=\"{'max-w-6xl': !stretched}\">\n    <div class=\"video-container relative lazyload-video\" :class=\"backgroundColor\">\n      <iframe class=\"embed w-full h-full absolute top-0 left-0'\" :width=\"width\" :height=\"height\" :data-src=\"embedUrl\" src=\"\" title=\"Video\" frameborder=\"0\" allowfullscreen=\"\"></iframe>\n      <!--\n        iframe needs to be <iframe></iframe> instead of <iframe></iframe> because jsDom has a bug not to be able to parse <iframe></iframe>.\n       -->\n    </div>\n  </div>\n","props":"{\"stretched\":{\"default\":false},\"width\":{\"default\":560},\"height\":{\"default\":315},\"backgroundColor\":{\"default\":\"\"},\"embedUrl\":{\"default\":\"\"}}","data":false}}},"variation":{"class_attributes":{"headerClasses":{"backgroundColor":"bg-liquorice","logoColor":"text-white","toggleMenuColor":"bg-white","navColor":"text-header-liquorice hover:text-header-active-liquorice","navColorActive":"text-header-active-liquorice"},"footerClasses":{"backgroundColor":"bg-liquorice","textColor":"text-footer-liquorice","navColor":"text-footer-liquorice hover:text-footer-active-liquorice","navColorActive":"text-footer-active-liquorice"},"filterClasses":{"filterColor":"text-filter-liquorice hover:text-filter-active-liquorice","filterColorActive":"text-filter-active-liquorice"},"paginationClasses":{"navColor":"text-pagination-liquorice hover:text-pagination-active-liquorice"},"markClasses":"mark-liquorice","inlineCodeClasses":"mark-liquorice"},"template_parts":{"layout":{"template":"\n  <div class=\"min-h-content-preview bg-liquorice text-body-liquorice pb-px text-18px leading-looser\">\n    <main class=\"min-h-screen flex flex-col\">\n\n      <!-- Header -->\n      <froyio-header :background-color=\"headerClasses.backgroundColor\" :logo-color=\"headerClasses.logoColor\" :toggle-menu-color=\"headerClasses.toggleMenuColor\" :nav-color=\"headerClasses.navColor\" :nav-color-active=\"headerClasses.navColorActive\"></froyio-header>\n\n      <!-- Masthead -->\n      <div class=\"masthead-container\">\n        <froyio-masthead v-if=\"$parent.masthead.show\" overlay-color=\"bg-black\" text-color=\"text-red-berry\" text-alt-color=\"text-red-berry\" background-color=\"bg-placeholder-vanilla\" :image-url=\"$parent.masthead.image\" :content=\"$parent.page.title\"></froyio-masthead>\n      </div>\n\n      <!-- Content -->\n      <transition name=\"content-reveal\" appear=\"\">\n        <slot></slot>\n      </transition>\n\n      <!-- Footer -->\n      <froyio-footer :background-color=\"footerClasses.backgroundColor\" :text-color=\"footerClasses.textColor\" :nav-color=\"footerClasses.navColor\" :nav-color-active=\"footerClasses.navColorActive\"></froyio-footer>\n    </main>\n  </div>\n"},"blocks":{"template":"<div :class=\"wrapperClass\">\n      <template v-for=\"(block, index) in blocks\">\n\n        <!-- Headings -->\n        <froyio-heading v-if=\"block.type === 'header' && block.data.level == 1\" :key=\"index\" :level=\"1\" color=\"text-white\" :content=\"block.data.text\"></froyio-heading>\n\n        <froyio-heading v-if=\"block.type === 'header' && block.data.level == 2\" :key=\"index\" :level=\"2\" color=\"text-white\" :content=\"block.data.text\"></froyio-heading>\n\n        <froyio-heading v-if=\"block.type === 'header' && block.data.level == 3\" :key=\"index\" :level=\"3\" color=\"text-white\" :content=\"block.data.text\"></froyio-heading>\n\n        <froyio-heading v-if=\"block.type === 'header' && block.data.level == 4\" :key=\"index\" :level=\"4\" color=\"text-white\" :content=\"block.data.text\"></froyio-heading>\n\n        <froyio-heading v-if=\"block.type === 'header' && block.data.level == 5\" :key=\"index\" :level=\"5\" color=\"text-white\" :content=\"block.data.text\"></froyio-heading>\n\n        <froyio-heading v-if=\"block.type === 'header' && block.data.level == 6\" :key=\"index\" :level=\"6\" color=\"text-white\" :content=\"block.data.text\"></froyio-heading>\n\n        <!-- Paragraph -->\n        <froyio-paragraph v-if=\"block.type === 'paragraph'\" :key=\"index\" :content=\"block.data.text\" :color=\"markClassSettings + inlineCodeClassSettings\"></froyio-paragraph>\n\n        <!-- List -->\n        <froyio-list v-if=\"block.type === 'list'\" :key=\"index\" type=\"ol\" :color=\"markClassSettings\">\n          <li v-for=\"(item, itemIndex) in block.data.items\" :key=\"itemIndex\" v-html=\"item\"></li>\n        </froyio-list>\n\n        <!-- FroyioDelimiter -->\n        <froyio-delimiter v-if=\"block.type === 'delimiter'\" :key=\"index\" background-color=\"bg-black\"></froyio-delimiter>\n\n        <!-- FroyioBlockquote -->\n        <froyio-blockquote v-if=\"block.type === 'quote'\" :key=\"index\" :icon-show=\"true\" :color=\"'text-white ' + markClassSettings\" icon-background-color=\"bg-liquorice\" icon-color=\"text-white\" :content=\"block.data.text\"></froyio-blockquote>\n\n        <!-- Thumbnail -->\n        <froyio-thumbnail v-if=\"block.type === 'image'\" :key=\"index\" :stretched=\"block.data.stretched\" :width=\"block.data.width\" :height=\"block.data.height\" background-color=\"bg-placeholder-liquorice\" :image-url=\"block.data.file.url\" caption=\"An image caption\"></froyio-thumbnail>\n\n        <!-- Vimeo Embed -->\n        <froyio-video v-if=\"block.type === 'embed' && block.data.service === 'vimeo'\" :key=\"index\" :width=\"block.data.width\" :height=\"block.data.height\" background-color=\"bg-placeholder-liquorice\" :embed-url=\"block.data.embed\"></froyio-video>\n\n        <!-- YouTube Embed -->\n        <froyio-video v-if=\"block.type === 'embed' && block.data.service === 'youtube'\" :key=\"index\" :width=\"block.data.width\" :height=\"block.data.height\" background-color=\"bg-placeholder-liquorice\" :embed-url=\"block.data.embed\"></froyio-video>\n\n        <!-- Grid -->\n        <section v-if=\"block.type === 'grid'\" :key=\"index\">\n          <froyio-grid-filter v-if=\"getGridFilterItemsInArray(block.data.items)\" :stretched=\"block.data.stretched\" class=\"bg-liquorice\">\n            <froyio-grid-filter-item v-for=\"(link) in getGridFilterItemsInArray(block.data.items)\" :key=\"link\" :filter-classes=\"filterClassSettings\" :link=\"link\">\n              {{ link }}\n            </froyio-grid-filter-item>\n          </froyio-grid-filter>\n          <froyio-grid :grid-columns=\"`grid-cols-2 md:grid-cols-${block.data.columns}`\" :gaps=\"block.data.gaps\" :stretched=\"block.data.stretched\" :aspect-ratio=\"block.data.aspect\">\n            <froyio-grid-item v-for=\"(item, idx) in block.data.items\" v-show=\"item.type == filter || filter == 'all'\" :key=\"item.image\" :index=\"idx\" :columns=\"item.cols\" :rows=\"item.rows\" :type=\"item.type\" background-color=\"bg-placeholder-liquorice\" :image-url=\"item.image\" :media-type=\"item.media_type\" :media-url=\"item.media_url\" :link=\"item.url\" :caption=\"item.caption\" caption-color=\"text-caption-grid-liquorice\"></froyio-grid-item>\n          </froyio-grid>\n        </section>\n\n      </template>\n    </div>"},"privacy":{"template":"\n  <!-- Wrapper to push footer -->\n  <div class=\"mt-20 flex-1\">\n    <div class=\"max-w-4xl mx-auto\">\n\n      <!-- Heading -->\n      <froyio-heading :level=\"1\" color=\"text-white\" :content=\"heading\"></froyio-heading>\n\n      <!-- Paragraph -->\n      <froyio-paragraph :content=\"updated\"></froyio-paragraph>\n\n      <!-- Paragraph -->\n      <froyio-paragraph :content=\"policy\"></froyio-paragraph>\n\n    </div>\n  </div>\n","data":{"heading":"Privacy Policy","updated":"<strong>Updted: 02/02/2021</strong>","policy":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}},"terms":{"template":"\n  <!-- Wrapper to push footer -->\n  <div class=\"mt-20 flex-1\">\n    <div class=\"max-w-4xl mx-auto\">\n\n      <!-- Heading -->\n      <froyio-heading :level=\"1\" color=\"text-white\" :content=\"heading\"></froyio-heading>\n\n      <!-- Paragraph -->\n      <froyio-paragraph :content=\"updated\"></froyio-paragraph>\n\n      <!-- Paragraph -->\n      <froyio-paragraph :content=\"terms\"></froyio-paragraph>\n\n    </div>\n  </div>\n","data":{"heading":"Terms Of Sale","updated":"<strong>Updted: 02/02/2021</strong>","terms":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}}}}};