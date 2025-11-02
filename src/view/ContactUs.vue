<script setup>
import { ref } from 'vue'

// Load image properly via Vite
const contactImage = new URL('@/assets/img/contact.png', import.meta.url).href

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
}
</script>

<template>
    <section class="contact-section container">
        <div class="contact-left">
             <article>
                <img :src="contactImage" alt="Contact Image" />
            </article>
        </div>
        <div class="contact-right">
            <span>BUILD THE FUTURE WITH US</span>
           <h2>Contact Us</h2>
           <form  @submit.prevent="handleSubmit">
            <div class="form-group">
                <label>Name*</label>
                <input
                id="name"
                class="form-control"
                placeholder="Enter Your Name"
                v-model="form.name"
                 required/>
            </div>
             <div class="form-group">
                <label>Email*</label>
                <input
                id="email"
                class="form-control"
                placeholder="Enter Your Email"
                v-model="form.email" 
                required/>
            </div>
             <div class="form-group">
                <label>Phone Number*</label>
                <div class="phone-wrapper">
                    <div class="country-select">
                    <select id="country-code" name="country-code">
                        <option value="+91" data-flag="in">India (+91)</option>
                        <option value="+1" data-flag="us">USA (+1)</option>
                        <option value="+44" data-flag="gb">UK (+44)</option>
                        <option value="+61" data-flag="au">Australia (+61)</option>
                        <option value="+81" data-flag="jp">Japan (+81)</option>
                    </select>
                    </div>

                    <input
                    type="tel"
                    id="phone"
                    name="phone"
                    class="form-control"
                    placeholder="Enter your phone number"
                    required
                    />
                </div>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea
                    id="message"
                    class="form-control"
                    v-model="form.message"
                    rows="4"
                    placeholder="Write your message..."
                    required>
                </textarea>
            </div>
            <button type="submit" class="btn_tag">Send Message</button>
           </form>
        </div>
    </section>
</template>