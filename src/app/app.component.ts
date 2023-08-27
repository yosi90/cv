import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {

    @ViewChild('base', {static: true}) elemento!: ElementRef;

    title = 'yosiftwareCv';
    skills = ['C#', 'Windows Forms', 'Itext7', 'Desarrollo web', 'Angular', 'Firebase', 'Sql server'];
    experiencias = [
        {
            cargo: 'Desarrollador web', tecnologias: ['Odoo', 'Python', 'Qweb', 'Xml', 'Html5', 'css3', 'JavaScript'], duracion: '3 meses',
            tipo: 'Prácticas de empresa', empresa: 'Bakata solutions', ano: '2022 - 2023', desc: `Alumno en prácticas realizando tareas en Odoo 
            tales como desarrollar snippets y adaptar código externo a Odoo y hacerlo responsivo`
        }
    ];
    formacion = [
        {
            titulo: 'Técnico superior en desarrollo de aplicaciones web', tecnologias: ['Html5', 'Css3', 'C#', 'Sql Server', 'Github', 'Xml', 'DTD y Schema'], 
            duracion: '2 años', tipo: 'Ciclo superior', centro: 'CIFP Cesar Manrique', ano: '2022 - Actualidad', union: 'entre', nivel: ''
        },
        {
            titulo: 'Desarrollo de aplicaciones con tecnologías web', tecnologias: ['Html5', 'Css3', 'JavaScript', 'PHP'], 
            duracion: '600 horas', tipo: 'Certificado de profesionalidad', centro: 'Viernes centro de formación', ano: '2022', union: ' en', nivel: '3'
        },
        {
            titulo: 'Confección y publicación de páginas web', tecnologias: ['Html5', 'Css3', 'JavaScript'], 
            duracion: '570 horas', tipo: 'Certificado de profesionalidad', centro: 'Viernes centro de formación', ano: '2022', union: ' en', nivel: '2'
        },
        {
            titulo: 'Programación en lenguajes estructurados', tecnologias: ['C#', 'Sql Server'], 
            duracion: '710 horas', tipo: 'Certificado de profesionalidad', centro: 'Instituto canario de psicología empresarial', ano: '2018', union: ' en', nivel: '3'
        },
    ];
    experienciasS = [
        {
            cargo: 'Mantenimiento de sistemas de juego', tecnologias: ['Bingo tradicional', 'Ringo (Bingo electrónico en red)', 'Sistemas', 'Electrónica'],
            duracion: '1 año', tipo: 'Contrato', empresa: 'Automáticos canarios', ano: '2019 - 2020', 
            desc: ['Técnico de bingo - Software y electrónica', 'Encargado de Ringo en Tenerife']
        },
        {
            cargo: 'Equipo de sistemas', tecnologias: ['Windows', 'Windows server', 'Hyper v', 'Azure', 'Impresoras multifunción'],
            duracion: '9 meses', tipo: 'Contrato', empresa: 'Canarias informática', ano: '2017 - 2018', 
            desc: ['Parte del equipo de mantenimiento de sistemas', 'Instalador de red estructurada', 'Mantenimiento de sistemas y servidores']
        }
    ];
    proyectos = [
        {
            nombre: 'Fichas 3.5', estado: 'En desarrollo', ano: '2023 - Actualidad', tecnologias: ['Angular', 'Firebase', 'Python', 'Sql server'],
            desc: `Mi hobby es el rol y decidí crear esta aplicación para facilitar la vida a Masters y jugadores, aportándoles una potente solución cargada de vasto 
            conocimiento de d&d 3.5 y herramientas para ampliarlo y generar nuevo contenido homebrew. El proyecto es un port muy temprano de la versión de windows 
            forms y por ahora solo tiene implementada la vista de personajes y generación de fichas en formato PDF`, detalles: ['Creación de personajes', 
            'Creación de elementos homebrew, desde razas hasta armas y deidades', 'Opción de login con google y microsoft'], url: 'rol.yosiftware.es'
        },
        {
            nombre: 'Web de mudanzas', estado: 'V1.0', ano: '2022', tecnologias: ['Html5', 'PHP', 'Sass', 'My sql'],
            desc: `Una página web para gestionar el almacenamiento de tus cosas durante una mudanza. Un familiar me la pidio y acepté el reto.`, 
            detalles: ['Sistema de usuarios hecho a mano, con Administradores, moderadores y usuarios.', 'Distinción entre Almacén, contenedor y objeto', 
            'Los usuarios solo pueden ver aquellos depósitos en los que tienen objetos de su propiedad.', 'Actualmente no hosteada, en espera de que me llegue mi raspberry pi 4'], url: ''
        },
        {
            nombre: 'Fichas 3.5 - WindowsForms', estado: 'En desarrollo', ano: '2018 - 2023', tecnologias: ['C#', 'Wndows forms', 'Material design', 'Sql server'],
            desc: `Proyecto antecesor a Fichas 3.5, comencé este desarrollo mientras estudiaba C# pero terminé dejándolo de lado cuando me metí en el mundo del desarrollo web.`, 
            detalles: ['Creación de personajes', 'Creación de elementos homebrew, desde razas hasta armas y deidades', 'Opción de login con google y microsoft'], url: ''
        }
    ];

    visible = false;

    toggle() {
        this.visible = !this.visible;
    }
}