import {ref, onMounted, onUnmounted, reactive} from 'vue'
// import {getUserInfo} from '@/api'

export default function user(){
  let user = reactive({
    id: '1111',
    userName: 'ben',
    score: '100'
  })
  onMounted(async ()=>{
    // user = await getUserInfo()
  })
  return user
}
