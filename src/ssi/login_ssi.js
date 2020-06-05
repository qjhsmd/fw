//   let demoSsi  = function() {
//        this.vm ={
//                hello:'hello',
//                abc:'abc'
//        }
//        this.getVM = function () {
//         return this.vm
//       }
//       this.restVM = function () {

//       }
//       this.xxx = function(){
//            console.log('====测试方法=====')
//            this.vm.abc ='cba'
//       }
// }
// export  const DemoSsi = new demoSsi ()
import API from "@/api"

export default {
  name: 'demo',
  data() {
    return {
      params: {
        username: '',
        password: '',
        id: ''
      }

    }
  },
  props: {
    msg: String
  },
  mounted() {
    console.log('挂载到demo')
    // this.demo()
  },
  methods: {
    goTo() {
      this.$router.push('/hello')
    },
    submit() {
     
        API.login(JSON.stringify(this.params))
          .then(result => {
            console.log("updateUserPsw")
             console.log(result)

          })
          .catch(error => {
            console.log(error)
          })
    },
    demo() {
      API.demo()
          .then(result => {
             console.log(result)

          })
          .catch(error => {
            console.log(error)
          })
    }
  }
}