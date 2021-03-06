import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { SharedModule } from '../shared/shared.module';
import { ProductResolverService } from './product-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:productId',
        component: ProductDetailComponent,
        resolve: { resolvedData: ProductResolverService }
      },
      {
        path: 'products/:productId/edit',
        component: ProductEditComponent,
        resolve: { resolvedData: ProductResolverService },
      }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ]
})
export class ProductModule {}
