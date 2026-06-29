import { Injectable, inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { API_URL } from "./api";

export interface Projeto {
    id: number;
    nome: string;
    descricao: string;
    tecnologias: string;
    link_github: string;
    ano: number;
}

@Injectable({ providedIn: 'root' })
export class ProjetoService {

    private http = inject(HttpClient);

    listar(): Observable<Projeto[]> {
        return this.http.get<Projeto[]>(`${API_URL}/projetos.php`);
    }

}