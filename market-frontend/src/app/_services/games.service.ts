import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private _games: any[] = [
    {
      "id": 1,
      "name": "Assassin's Creed: Мираж",
      "bannerUri": "https://cdn2.unrealengine.com/breaker-image-1920x1080-1920x1080-9b4788ed14ab.png",
      "thumbnailUri": "https://cdn1.epicgames.com/offer/9bcf5a4dc1d54cb6ab1a42f3a70c5cf4/Carousel_BoxArt_1200x1600_1200x1600-38bda67bb1290f58e8a18ddc38a3c0ec?h=854&resize=1&w=640",
      "price": 0,
      "discount": 0,
      "description": "Узнайте историю Басима, хитрого вора, который устремляется на оживлённые улицы Багдада IX века в поисках ответов и справедливости."
    },
    {
      "id": 2,
      "name": "RAILGRADE",
      "bannerUri": "https://cdn2.unrealengine.com/egs-railgrade-minakatadynamics-g1a-01-1920x1080-e7ee69a12be8.jpg",
      "thumbnailUri": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_RAILGRADE_MinakataDynamics_S2_1200x1600-f40aa411ee439ddd990de6b9e12e4ba6?h=854&resize=1&w=640",
      "price": 0,
      "discount": 0,
      "description": "RAILGRADE — это симулятор управления железной дорогой, грузовыми перевозками и электроэнергетикой на внеземной колонии. Будучи администратором своей планеты, вы должны восстановить разрушенную инфраструктуру и заново наладить производство."
    },
    {
      "id": 3,
      "name": "Rocket League",
      "bannerUri": "https://cdn2.unrealengine.com/egs-rocketleague-psyonixllc-g1a-00-1920x1080-5083af207bb2.jpg",
      "thumbnailUri": "https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S2_1200x1600-b971eeed246678c6aa914b9ea52172ff?h=854&resize=1&w=640",
      "price": 0,
      "discount": 0,
      "description": "Rocket League — это энергичное сочетание аркадного футбола, автомобильного безумия, простого управления и соревнований, основанных на законах физики."
    },
    {
      "id": 4,
      "name": "Teamfight Tactics",
      "bannerUri": "https://sun9-east.userapi.com/sun9-60/s/v1/ig2/XEn2mg8hRMPxJGANPZF_tv8JYDxOf7RG-T32c7zbMdZ07W6S4kjCZwDS1HZolnoM7FKLkdxsqKPgGS80p8mFHMsD.jpg?size=1920x1080&quality=95&type=album",
      "thumbnailUri": "https://cdn1.epicgames.com/offer/ada73cc2d68a46a18f529ebb87328dee/EGS_TeamfightTactics_RiotGames_S2_1200x1600-71d14625d9ff0d3c2d4253acea148093?h=854&resize=1&w=640",
      "price": 0,
      "discount": 0,
      "description": "Исследуйте древние чудеса, открывающиеся в самых дальних уголках Драконьих земель. Откройте для себя четыре новых происхождения чемпионов, новых драконов, драконьи улучшения и многое другое!"
    },
    {
      "id": 5,
      "name": "Genshin Impact",
      "bannerUri": "https://cdn2.unrealengine.com/genshin-impact-sumeru-3840x2160-09af459e1caf.png",
      "thumbnailUri": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GenshinImpact_miHoYoLimited_S2_1200x1600-c12cdcc2cac330df2185aa58c508e820?h=854&resize=1&w=640",
      "price": 0,
      "discount": 0,
      "description": "На огромном континенте Тейват вы посетите семь королевств, найдёте спутников с различными умениями и сразитесь с могущественными врагами в поисках пропавшего близкого человека."
    },
    {
      "id": 6,
      "name": "Timberborn",
      "bannerUri": "https://cdn2.unrealengine.com/egs-timberborn-mechanistry-g1a-13-1920x1080-4fc73790477c.jpg",
      "thumbnailUri": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Timberborn_Mechanistry_S2_1200x1600-35c32e6338fad3f20d2fad5d7b899f8d?h=854&resize=1&w=640",
      "price": 549,
      "discount": 20, 
      "description": "Люди давно исчезли. Выживут ли бобры-дровосеки? Градостроительный симулятор со смекалистыми животными, высотными постройками, регулированием водопотока и смертоносными засухами. Высокое содержание дерева."
    },
    {
      "id": 7,
      "name": "Isonzo",
      "bannerUri": "https://cdn2.unrealengine.com/egs-isonzo-m2hblackmillgames-g1a-13-1920x1080-6b150c9ed039.jpg",
      "thumbnailUri": "https://cdn1.epicgames.com/offer/30de69013f3b41b0ba594a8ef3b693ba/EGS_Isonzo_M2HBlackmillGames_S2_1200x1600-1225b5b75f29ea6723fcb23b2f3fae46?h=854&resize=1&w=640",
      "price": 649,
      "discount": 10,
      "description": "Свирепая альпийская кампания проверит ваши тактические умения в оригинальном шутере от первого лица по мотивам Первой мировой войны. Сражайтесь среди живописных пиков, скалистых долин и идиллических городов северной Италии. Мировая война на итальянском фронте оживает и достигает неожиданных высот!"
    },
    {
      "id": 8,
      "name": "A Tale of Paper: Refolded",
      "bannerUri": "https://cdn1.epicgames.com/spt-assets/10e25633ab924acc9cf048bc1cf64d05/a-tale-of-paper--refolded-6y0l2.jpg",
      "thumbnailUri": "https://cdn1.epicgames.com/spt-assets/10e25633ab924acc9cf048bc1cf64d05/download-a-tale-of-paper--refolded-offer-7tv91.jpg?h=854&resize=1&w=640",
      "price": 449,
      "discount": 10,
      "description": "Паззл-платформер A Tale of Paper рассказывает историю волшебного персонажа из бумаги Лайна (Line), способного с помощью техник оригами менять облик. Чтобы осуществить мечту своего создателя, во время путешествия Лайн будет превращаться в лягушку, ракету, птицу и многое другое."
    },
    {
      "id": 9,
      "name": "Fuga: Melodies of Steel",
      "bannerUri": "https://cdn2.unrealengine.com/egs-fugamelodiesofsteel-cyberconnect2-g1a-02-1920x1080-a0bd6ad506d2.jpg",
      "thumbnailUri": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_FugaMelodiesofSteelDeluxeEdition_CyberConnect2_Editions_S2_1200x1600-19f99d66847d6198fbd19fe7b58e1369?h=854&resize=1&w=640",
      "price": 2439,
      "discount": 30,
      "description": "«Мы должны бороться! Если мы этого не сделаем, мы потеряем всех, кого любим!» В одну роковую ночь мирная деревня оказалась охваченной пламенем войны. Решив спасти свои семьи, группа детей садится на гигантский танк и начинает наступательную атаку!"
    },
    {
      "id": 10,
      "name": "Restles Soul",
      "bannerUri": "https://cdn1.epicgames.com/spt-assets/44303c595d7b4e2eb75fe888511b5a39/restless-soul-1u81b.png",
      "thumbnailUri": "https://cdn1.epicgames.com/spt-assets/44303c595d7b4e2eb75fe888511b5a39/download-restless-soul-offer-1vt9a.png?h=854&resize=1&w=640",
      "price": 349,
      "discount": 10,
      "description": "Смейтесь в лицо смерти в этом захватывающем юмористическом приключении о заблудшей душе, пытающейся вернуться в мир живых. Участвуйте в облегченных битвах в пуленепробиваемом аду, решайте головоломки и общайтесь с мертвецами, путешествуя по этому “красочному” миру."
    }
  ]

  get games(): any[] {
    return JSON.parse(localStorage.getItem("games")!) || this._games;
  }

  constructor() { }

  getTopGames() {
    return this.games.slice(0, 5);
  }

  getGamesOnSale() {
    return this.games;
  }

  searchGames(query: string) {
    return this.games
      .filter(g => g.name.toLowerCase().includes(query.toLowerCase()));
  }

  addNewGame(newGame: any) {
    let games = this.games;
    newGame.id = games[games.length - 1].id + 1;
    games.push(newGame);
    localStorage.setItem('games', JSON.stringify(games));
  }
}
