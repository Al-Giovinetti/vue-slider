const { createApp } = Vue

createApp({
    data() {
        return {
            images : [
                {
                    img:"img/ace-ventura.jpg",
                    title:"Ace Ventura",
                    actor:"Jim Carrey"
                },
                {
                    img:"img/jurassic-park.webp",
                    title:"Jurassic Park",
                    actor:"Sam Neill" 
                },
                {
                    img:"img/matrix.webp",
                    title:"Matrix",
                    actor:"Keanu Reeves"
                },
                {
                    img:"img/pulp-fiction.jpg",
                    title:"Pulp Fiction",
                    actor:"Uma Thurman" 
                },
                {
                    img:"img/scream.avif",
                    title:"Scream",
                    actor:"Neve Campbell"
                }
                
            ],

            activeIndex: 0,
        }
    },
    methods: {
        PreviusSlide(){
            if(this.activeIndex == 0){
                this.activeIndex = this.images.length - 1
            }else{
                this.activeIndex --
            }
        },
        NextSlide(){
            if(this.activeIndex == this.images.length-1){
                this.activeIndex = 0
            }else{
                this.activeIndex ++
            }
        }

    }
}).mount("#app");


