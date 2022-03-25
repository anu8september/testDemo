import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchPipe'
})
export class CustomSearch implements PipeTransform {
  transform(icdData: any[], searchTermIcd: string): any {
       if (!icdData || !searchTermIcd) { return icdData; }
    icdData.forEach(element => {
      if (element.Name == null) {
        element.Name = "";
      }
      if (element.Category == null) {
        element.Category = "";
      }
      if (element.Price == null) {
        element.Price = "";
      }
    });
    return icdData.filter(ad =>
      ad.Name.toLowerCase().indexOf(searchTermIcd.toLowerCase().trim()) !== -1
      ||
      ad.Category.toLowerCase().indexOf(searchTermIcd.toLowerCase().trim()) !== -1
      ||
      ad.Price.toLowerCase().indexOf(searchTermIcd.toLowerCase().trim()) !== -1
    );
  }
}