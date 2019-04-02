import { Injectable } from '@angular/core';
import { DocumentList } from '../models/doclist';

const documentListPromise: any = Promise.resolve([
    {
        'wfcontext': 'PumpSuppliesMedicare',
        'documents': [
              { name: 'PWO',  selected: false, id: 12, desc: 'PWO' },
              { name: 'ABN',  selected: false, id: 2, desc: 'ABN'},
        ]
    },
    {
        'wfcontext': 'PumpSuppliesCommercial',
        'documents': [
              { name: 'PWO',  selected: true, id: 12, desc: 'PWO' },
              { name: 'ABN',  selected: false, id: 2, desc: 'ABN'},
              { name: 'xyz',  selected: false, id: 3, desc: 'XYZ'}

        ]
    }
]);
@Injectable()
export class DocumentsService {
  getDocList() {
    return documentListPromise;
  }
  // find a specific user
  getDocumentsByContext(context: string) {
    return documentListPromise
      .then(documents => documents.find(documentlist => documentlist.wfcontext === context));
  }
}
