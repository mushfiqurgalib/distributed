<template>
    

<form @submit.prevent="handleSubmit"
class="login100-form validate-form">
  <div class="form-group">
    <label for="exampleInputEmail1">Upload Story</label>
    <input type="file" class="input100" name="story"  placeholder="Upload photo">
    
  </div>
   <div class="container-login100-form-btn">
            <button class="login100-form-btn">Upload</button>
          </div>
</form>
</template>

    

<script>
import axios from 'axios';
// import axios from "axios";
export default {
  name: "CreateStory",

  data() {
    return {
      email: "",
      story: "",
    };
  },

  methods: {
    async handleSubmit() {
 const res = await axios.post("/api/v1/employee/story", {
      
        story: this.story,
        email:localStorage.getItem("email")
      }
      
      );
      console.log(res);
    this.$router.push("/status");
   
    
    },
  },
};
</script>