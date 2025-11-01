<template>
    <section class="products-section container">
        <h6>Innovative</h6>
        <h2>Products</h2>
        <ul>
            <li class="product-container">
                <article v-for="(product, index) in productdetails" :key="index" class="product-item">
                    <div class="figure-section">
                        <figure>
                            <img :src="product.figureBanner" alt="TechBank Logo" />
                        </figure>
                        <figure class="float-figure">
                            <img :src="product.figureLogo" alt="TechBank Logo" />
                        </figure>
                    </div>

                    <div class="details">
                        <span class="inline-flex-span">
                         <h3>{{ product.label }}</h3>
                            <p>
                                {{ product.textlineone }} <br />
                                {{ product.textlinetwo }}
                            </p>
                        </span>
                        <Button type="button" class="btn_tag efx-slide">View</Button>
                    </div>
                </article>
            </li>
        </ul>
    </section>
</template>
<script setup>
const productdetails = [
    {
        figureBanner: new URL('@/assets/img/product_Img_one.png', import.meta.url).href,
        figureLogo: new URL('@/assets/img/Dwallet.png', import.meta.url).href,
        label: 'dwallet',
        textlineone: 'A secure, intuitive crypto wallet for managing',
        textlinetwo: 'your digital assets',
        
    },
        {
         figureBanner: new URL('@/assets/img/product_Img_two.png', import.meta.url).href,
        figureLogo:  new URL('@/assets/img/dbank_logo.png', import.meta.url).href, 
        label: 'dbank',
        textlineone: 'A secure staking platform for earning ',
        textlinetwo: 'rewards on your digital assets',
    },

];
</script>