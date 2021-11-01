import Vue from 'vue'
import { Store } from 'vuex'
import { State } from './store/state'

declare module 'vue/types/vue' {
  interface Vue {
    $pstore: Store<State>
  }
}
