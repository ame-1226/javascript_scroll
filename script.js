// JavaScript
//console.log('Hello world!');

//実行する機能
//const show = (entries) => {
    //console.log(entries[0].target);

    //const keyframes = {
       // opacity: [0, 1],
        //translate: ['200px 0',0]
     //}
     //entries[0].target.animate(keyframes,600);

      
      const show = (entries, obs) => {
        entries.forEach((entry) => {
            const keyframes = {
              opacity: [0, 1],
              translate: ['200px 0',0]
            }
            entry.target.animate(keyframes,600);

            //一度表示されたら止める
      obs.unobserve(entry.target);
      
        });
      }
      
      const observer = new IntersectionObserver(show);
      
      //監視対象
      const images = document.querySelectorAll('.img');
      images.forEach(img =>{
        observer.observe(img);
      });
  

  //監視機能の設置
//const observer = new IntersectionObserver(show);

//監視対象の指示
//observer.observe(document.querySelector('#imgD1'));


