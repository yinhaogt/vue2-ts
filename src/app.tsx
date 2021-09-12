import Vue from "vue"
import Component from "vue-class-component";
@Component
export default class App extends Vue {
    private test = 'lalalalala'
    render(){
        console.log(this.test);
        return (
            `<div id='app'>fadf</div>`
        )
    }
}