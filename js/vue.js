var queData = [
  ['近い方がいい','どこでもいい'],
  ['2000m未満','2000m以上','長さ気にしない'],
  ['圧接','パウダーあり'],
  ['スキーヤーのみ','スノボも可能']
]

var app = new Vue({
  el:'#Diagnosis',
  data:{
    answer:[],
    answer_num:$('.menuItem').length,
    sex:'',
    current_num:0,
    toilet:'',
    amount:'',
    demand:'',
    suply:'',
    result_active:'',
    nemu_active:'',
    result_txt:'',
    result:{
      '0000':1,
      '0001':2,
      '0002':3,
      '0010':4,
      '0011':5,
      '0012':6,
      '0100':7,
      '0101':8,
      '0102':9,
      '0110':10,
      '0111':11,
      '0112':12,
      '1000':13,
      '1001':14,
      '1002':15,
      '1010':16,
      '1011':17,
      '1012':18,
      '1100':19,
      '1101':20,
      '1102':21,
      '1110':22,
      '1111':23,
      '1112':24
    },
    result_num:''
  },
  watch: {
      result_num:function(n,o){
        this.result_txt = queData[0][this.sex]+' >> ' + queData[1][this.toilet] +' >> ' +queData[2][this.amount] +' >> ' +queData[3][this.demand] + ' >> ' +queData[4][this.suply] +' を選択した時のコンテンツ'
      }
  },
  created:function(){
    var _t = this;
    setTimeout(function(){
      _t.nemu_active = '__active';
                         },400);
  },
  methods:{
    check:function(){
      this.answer[0] = this.sex;
      this.answer[1] = this.toilet;
      this.answer[2] = this.amount;
      this.answer[3] = this.demand;
      this.answer[4] = this.suply;
      this.current_num = this.answer.indexOf('');
      
      if(this.answer.indexOf('')==-1){
        this.nemu_active = '__hide';
        this.result_active = '__active';
        this.result_num = this.result[this.answer.join('')];
      }
    }
  }
})
