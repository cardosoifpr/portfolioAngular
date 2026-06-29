import { Injectable, inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { API_URL } from "./api";

export interface Tecnologia {
    id: number;
    nome: string;
    categoria: string;
    descricao: string;
    ano_criacao: number;
}

@Injectable({ providedIn: 'root' })
export class TecnologiaService {

    private http = inject(HttpClient);

    listar(): Observable<Tecnologia[]> {
        return this.http.get<Tecnologia[]>(`${API_URL}/tecnologias.php`);
    }

}