import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorRegionComponent,
    VerPaisComponent,
    PorPaisComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PorCapitalComponent,
    PorRegionComponent,
    VerPaisComponent,
    PorPaisComponent
  ],
})
export class PaisesModule { }
