import { LightningElement } from 'lwc';
const DELAY = 300;

export default class MovieSearch extends LightningElement {
    selectedType = "";
    selectedSearch = "";
    loading = false;
    selectedPageNo = "1";
    delayTimeout;
    get typeoption(){
        return [
            { label: "None", value: "" },
            { label: "Movie", value: "movie" },
            { label: "Series", value: "series" },
            { label: "Episode", value: "episode" }
        ];
    }
    handelchange(event){
        let{ name, value} = event.target;
        this.loading = true;
        if(name === "type"){
            this.selectedType = value;
            console.log('nisha gupta', selectedType);
        }else if(name === "search"){
            this.selectedSearch = value;
        }else if(name === "pageno"){
            this.selectedPageNo = value;
        }
        // clearTimeout(this.delayTimeout);
        // this.delayTimeout = setTimeout(()=>{
        //     this.searchMovie();
        // }, DELAY);
    }
    async searchMovie(){
        //http://www.omdbapi.com/?s=Batman&page=2
      //  const url = `http://www.omdbapi.com/?s=${this.selectedSearch}&type=${this.selectedType}&page=${this.selectedPageNo}&apikey=d727e739`;
        //const res = await fetch(url);
        //const data = await res.json();
        //consele.log('movie search output', data);
        this.loading = false;
    }
}