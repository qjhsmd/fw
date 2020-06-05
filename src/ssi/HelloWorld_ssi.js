const treeData = [
     {
       title: '0-0',
       key: '0-0',
       children: [
         {
           title: '0-0-0',
           key: '0-0-0',
           children: [
             { title: '0-0-0-0', key: '0-0-0-0' },
             { title: '0-0-0-1', key: '0-0-0-1' },
             { title: '0-0-0-2', key: '0-0-0-2' },
           ],
         },
         {
           title: '0-0-1',
           key: '0-0-1',
           children: [
             { title: '0-0-1-0', key: '0-0-1-0' },
             { title: '0-0-1-1', key: '0-0-1-1' },
             { title: '0-0-1-2', key: '0-0-1-2' },
           ],
         },
         {
           title: '0-0-2',
           key: '0-0-2',
         },
       ],
     },
     {
       title: '0-1',
       key: '0-1',
       children: [
         { title: '0-1-0-0', key: '0-1-0-0' },
         { title: '0-1-0-1', key: '0-1-0-1' },
         { title: '0-1-0-2', key: '0-1-0-2' },
       ],
     },
     {
       title: '0-2',
       key: '0-2',
     },
   ];
export default {
     name: 'HelloWorld',
     props: {
     msg: String
     },
     data(){
       return {
          hello:'hello',
          abc:'abc',
          status:false,
          a:0,
          expandedKeys: ['0-0-0', '0-0-1'],
          autoExpandParent: true,
          checkedKeys: ['0-0-0'],
          selectedKeys: [],
          treeData,
       }
     },
     watch: {
          checkedKeys(val) {
            console.log('onCheck', val);
          },
        },
     mounted(){
       console.log('挂载')
       this.xxx()
     },
     methods:{
          onExpand(expandedKeys) {
               console.log('onExpand', expandedKeys);
               // if not set autoExpandParent to false, if children expanded, parent can not collapse.
               // or, you can remove all expanded children keys.
               this.expandedKeys = expandedKeys;
               this.autoExpandParent = false;
             },
             onCheck(checkedKeys) {
               console.log('onCheck', checkedKeys);
               this.checkedKeys = checkedKeys;
             },
             onSelect(selectedKeys, info) {
               console.log('onSelect', info);
               this.selectedKeys = selectedKeys;
             },
     goTo(){
          this.$router.push('/demo')
     },
     xxx(){
          if(!this.status){
                         console.log('测试方法')
                           this.abc ='cba'
                           this.status =true
                           }
     },
     add(){
          this.a+=1
     }
     }
}