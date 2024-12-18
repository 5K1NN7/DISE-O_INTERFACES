import { Component } from '@angular/core';

@Component({
  selector: 'app-trabajo-5',
  standalone: false,
  templateUrl: './trabajo-5.component.html',
  styleUrl: './trabajo-5.component.css'
})
export class Trabajo5Component {
  export class ProductCarouselComponent {

    items = [
      { 
        title: 'LAVADORA', 
        cost: 1200, 
        stockStatus: 'Available', 
        imgUrl: 'https://evvohome.com/cdn/shop/articles/Como-elegir-el-tipo-de-lavadora-adecuada-para-ti.png?v=1698826818&width=2048'
      },
      { 
        title: 'COCINA', 
        cost: 450, 
        stockStatus: 'Unavailable', 
        imgUrl: 'https://www.mhindustrias.com/wp-content/uploads/2021/04/img-destacada-diseno-cocinas-opt.webp'
      },
      { 
        title: 'REFIGERADOR', 
        cost: 700, 
        stockStatus: 'Available', 
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSw6iOUY9mYokKu4EFNUbMNkXRKoJHJnwl5g&s'
      },
      { 
        title: 'HORNO', 
        cost: 275, 
        stockStatus: 'Available', 
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjzbYcSnQS6xcArZ_BlXzBIJ9_D699Vct23g&s'
      },
      { 
        title: 'SECADORA', 
        cost: 990, 
        stockStatus: 'Available', 
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTR3I1Codgjno50z99yjfW1Ujz_oosBO2SSA&s'
      },
      { 
        title: 'LICUADORA', 
        cost: 150, 
        stockStatus: 'Available', 
        imgUrl: 'https://colineal.com/cdn/shop/files/622356561891_2.jpg?v=1722354562'
      },
    ];
  
    carouselOptions = [
      {
        breakpoint: '2060px',
        visibleItems: 3,
        scrollItems: 1
      },
      {
        breakpoint: '980px',
        visibleItems: 2,   
        scrollItems: 1
      },
      {
        breakpoint: '660px',
        visibleItems: 1,   
        scrollItems: 1
      },
    ];

    determineSeverity(status: string): 'success' | 'danger' | 'warning' | 'info' {
      switch (status) {
        case 'Available':
          return 'success';
        case 'Unavailable':
          return 'danger';
        case 'Low Stock':
          return 'warning';
        default:
          return 'info';
      }
    }
  }
}
