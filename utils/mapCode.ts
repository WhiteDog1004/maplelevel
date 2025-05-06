export const getTextByCode = (code: number) => {
  const result = MAP_CODE.find((map) => map.code === code);

  return result;
};

export const MAP_CODE = [
  {
    code: 40000,
    kor: '메이플로드: 작은숲속',
    eng: 'Maple Road: Snail Hunting Ground I',
  },
  {
    code: 50000,
    kor: '메이플로드: 위험한숲속',
    eng: 'Maple Road: A Split Road',
  },
  {
    code: 1020000,
    kor: '메이플로드: 선택의 갈림길',
    eng: 'Rainbow Street: The Field East of Amherst',
  },
  {
    code: 100000005,
    kor: '히든스트리트: 남의집',
    eng: "Hidden Street: Someone Else's House",
  },
  {
    code: 100000006,
    kor: '히든스트리트: 버섯공원쉼터',
    eng: 'Hidden Street: The Resting Spot, Pig Park',
  },
  {
    code: 100000200,
    kor: '헤네시스: 월묘 파티 퀘스트',
    eng: 'Victoria Road: Henesys Park',
  },
  {
    code: 100010000,
    kor: '빅토리아로드: 헤네시스동쪽언덕',
    eng: 'Victoria Road: The Hill East of Henesys',
  },
  {
    code: 100020000,
    kor: '빅토리아로드: 헤네시스동쪽풀숲',
    eng: 'Victoria Road: The Rain-Forest East of Henesys',
  },
  {
    code: 100030000,
    kor: '빅토리아로드: 헤네시스동쪽숲',
    eng: 'Victoria Road: The Forest East of Henesys',
  },
  {
    code: 100030001,
    kor: '히든스트리트: 파란버섯의 숲',
    eng: 'Hidden Street: The Blue Mushroom Forest',
  },
  {
    code: 100040000,
    kor: '빅토리아로드: 엘리니아남쪽숲',
    eng: 'Victoria Road: The Forest South of Ellinia',
  },
  {
    code: 100040001,
    kor: '빅토리아로드: 남쪽숲나무던전1',
    eng: 'Victoria Road: Dungeon, Southern Forest I',
  },
  {
    code: 100040002,
    kor: '빅토리아로드: 남쪽숲나무던전2',
    eng: 'Victoria Road: Dungeon, Southern Forest II',
  },
  {
    code: 100040003,
    kor: '빅토리아로드: 남쪽숲나무던전3',
    eng: 'Victoria Road: Dungeon, Southern Forest III',
  },
  {
    code: 100040004,
    kor: '빅토리아로드: 남쪽숲나무던전4',
    eng: 'Victoria Road: Dungeon, Southern Forest IV',
  },
  {
    code: 100040100,
    kor: '빅토리아로드: 지혜의숲',
    eng: 'Victoria Road: The Forest of Wisdom',
  },
  {
    code: 100040101,
    kor: '히든스트리트: 원숭이의숲1',
    eng: 'Hidden Street: Monkey Forest I',
  },
  {
    code: 100040102,
    kor: '히든스트리트: 원숭이의숲나무던전1',
    eng: 'Victoria Road: Tree Dungeon, Monkey Forest I',
  },
  {
    code: 100040103,
    kor: '히든스트리트: 원숭이의숲2',
    eng: 'Victoria Road: Monkey Forest II',
  },
  {
    code: 100040104,
    kor: '히든스트리트: 원숭이의숲나무던전2',
    eng: 'Hidden Street: Tree Dungeon, Monkey Forest II',
  },
  {
    code: 100040105,
    kor: '히든스트리트: 사악한기운의숲1',
    eng: 'Hidden Street: The Forest of Evil I',
  },
  {
    code: 100040106,
    kor: '히든스트리트: 사악한기운의숲2',
    eng: 'Hidden Street: The Forest of Evil II',
  },
  {
    code: 100040110,
    kor: '히든스트리트: 숲아래층',
    eng: 'Hidden Street: Downstairs at the Forest',
  },
  {
    code: 100050000,
    kor: '빅토리아로드: 엘리니아남쪽필드',
    eng: 'Victoria Road: The Field South of Ellinia',
  },
  {
    code: 101010000,
    kor: '빅토리아로드: 엘리니아북쪽필드',
    eng: 'Victoria Road: The Field Up North of Ellinia',
  },
  {
    code: 101010100,
    kor: '빅토리아로드: 솟아오른나무1',
    eng: 'Victoria Road: The Tree That Grew I',
  },
  {
    code: 101010101,
    kor: '빅토리아로드: 솟아오른나무2',
    eng: 'Victoria Road: The Tree That Grew II',
  },
  {
    code: 101010102,
    kor: '빅토리아로드: 솟아오른나무3',
    eng: 'Victoria Road: The Tree That Grew III',
  },
  {
    code: 101020000,
    kor: '빅토리아로드: 엘리니아북쪽숲',
    eng: 'Victoria Road: The Forest North of Ellinia',
  },
  {
    code: 101020001,
    kor: '빅토리아로드: 북쪽숲나무통로',
    eng: 'Victoria Road: The Tree Tunnel At the Forest Up North',
  },
  {
    code: 101020002,
    kor: '빅토리아로드: 북쪽숲나무던전1',
    eng: 'Victoria Road: Tree Dungeon, Forest Up North I',
  },
  {
    code: 101020003,
    kor: '빅토리아로드: 북쪽숲나무던전2',
    eng: 'Victoria Road: Tree Dungeon, Forest Up North II',
  },
  {
    code: 101020004,
    kor: '빅토리아로드: 북쪽숲나무던전3',
    eng: 'Victoria Road: Tree Dungeon, Forest Up North III',
  },
  {
    code: 101020005,
    kor: '빅토리아로드: 북쪽숲나무던전4',
    eng: 'Victoria Road: Tree Dungeon, Forest Up North IV',
  },
  {
    code: 101020006,
    kor: '빅토리아로드: 북쪽숲나무던전5',
    eng: 'Victoria Road: Tree Dungeon, Forest Up North V',
  },
  {
    code: 101020007,
    kor: '빅토리아로드: 북쪽숲나무던전6',
    eng: 'Victoria Road: Tree Dungeon, Forest Up North VI',
  },
  {
    code: 101020008,
    kor: '빅토리아로드: 북쪽숲나무던전7',
    eng: 'Victoria Road: Tree Dungeon, Forest Up North VII',
  },
  {
    code: 101020009,
    kor: '빅토리아로드: 북쪽숲나무던전8',
    eng: 'Victoria Road: Tree Dungeon, Forest Up North',
  },
  {
    code: 101020010,
    kor: '빅토리아로드: 북쪽숲나무던전9',
    eng: 'Victoria Road: Tree Dungeon, Forest Up North IX',
  },
  {
    code: 101030000,
    kor: '빅토리아로드: 페리온동쪽령',
    eng: 'Victoria Road: East Domain of Perion',
  },
  {
    code: 101030001,
    kor: '히든스트리트: 와일드보어의 땅2',
    eng: 'Hidden Street: The Land of Wild Boar II',
  },
  {
    code: 101030100,
    kor: '빅토리아로드: 바위길3',
    eng: 'Victoria Road: Rocky Road III',
  },
  {
    code: 101030101,
    kor: '빅토리아로드: 유적 발굴지1',
    eng: 'Victoria Road: Excavation Site I',
  },
  {
    code: 101030102,
    kor: '빅토리아로드: 유적 발굴지2',
    eng: 'Victoria Road: Excavation Site II',
  },
  {
    code: 101030103,
    kor: '빅토리아로드: 유적 발굴지3',
    eng: 'Victoria Road: Excavation Site III',
  },
  {
    code: 101030104,
    kor: '빅토리아로드: 유적발굴단 캠프',
    eng: 'Victoria Road: Excavation Site <Camp>',
  },
  {
    code: 101030105,
    kor: '빅토리아로드: 유적의 무덤1',
    eng: 'Victoria Road: Remains <Tomb> I',
  },
  {
    code: 101030106,
    kor: '빅토리아로드: 유적의 무덤2',
    eng: 'Victoria Road: Remains <Tomb> II',
  },
  {
    code: 101030107,
    kor: '빅토리아로드: 유적의 무덤3',
    eng: 'Victoria Road: Remains <Tomb> III',
  },
  {
    code: 101030108,
    kor: '빅토리아로드: 유적의 무덤4',
    eng: 'Victoria Road: Remains <Tomb> IV',
  },
  {
    code: 101030109,
    kor: '빅토리아로드: 유적의 낭떠러지',
    eng: 'Victoria Road: Remains <Cliff>',
  },
  {
    code: 101030110,
    kor: '히든스트리트: 제1군영',
    eng: 'Victoria Road: Camp 1',
  },
  {
    code: 101030111,
    kor: '히든스트리트: 제2군영',
    eng: 'Victoria Road: Camp 2',
  },
  {
    code: 101030112,
    kor: '히든스트리트: 제3군영',
    eng: 'Victoria Road: Camp 3',
  },
  {
    code: 101030200,
    kor: '빅토리아로드: 바위길2',
    eng: 'Victoria Road: Rocky Road II',
  },
  {
    code: 101030300,
    kor: '빅토리아로드: 바위길1',
    eng: 'Victoria Road: Rocky Road I',
  },
  {
    code: 101030400,
    kor: '빅토리아로드: 동쪽바위산1',
    eng: 'Victoria Road: East Rocky Mountain I',
  },
  {
    code: 101030401,
    kor: '빅토리아로드: 동쪽바위산2',
    eng: 'Victoria Road: East Rocky Mountain II',
  },
  {
    code: 101030402,
    kor: '빅토리아로드: 동쪽바위산3',
    eng: 'Victoria Road: East Rocky Mountain III',
  },
  {
    code: 101030403,
    kor: '빅토리아로드: 동쪽바위산4',
    eng: 'Victoria Road: East Rocky Mountain IV',
  },
  {
    code: 101030404,
    kor: '빅토리아로드: 동쪽바위산5',
    eng: 'Victoria Road: East Rocky Mountain V',
  },
  {
    code: 101030405,
    kor: '빅토리아로드: 동쪽바위산6',
    eng: 'Victoria Road: East Rocky Mountain VI',
  },
  {
    code: 101030406,
    kor: '빅토리아로드: 동쪽바위산7',
    eng: 'Victoria Road: East Rocky Mountain VII',
  },
  {
    code: 101040000,
    kor: '빅토리아로드: 페리온동쪽길목',
    eng: 'Victoria Road: Perion Street Corner',
  },
  {
    code: 101040001,
    kor: '히든스트리트: 와일드보어의 땅',
    eng: 'Hidden Street: Land of Wild Boar',
  },
  {
    code: 101040002,
    kor: '히든스트리트: 벽 너머',
    eng: 'Hidden Street: Over the Wall',
  },
  {
    code: 101040003,
    kor: '히든스트리트: 아이언보어의 땅',
    eng: 'Hidden Street: Iron Boar Land',
  },
  {
    code: 102010000,
    kor: '빅토리아로드: 페리온서쪽길목',
    eng: 'Victoria Road: West Street Corner of Perion',
  },
  {
    code: 102020000,
    kor: '빅토리아로드: 서쪽바위산 I',
    eng: 'Victoria Road: West Rocky Mountain I',
  },
  {
    code: 102020100,
    kor: '빅토리아로드: 서쪽바위산 II',
    eng: 'Victoria Road: West Rocky Mountain II',
  },
  {
    code: 102020200,
    kor: '빅토리아로드: 서쪽바위산 III',
    eng: 'Victoria Road: West Rocky Mountain III',
  },
  {
    code: 102020300,
    kor: '빅토리아로드: 서쪽바위산 IV',
    eng: 'Victoria Road: West Rocky Mountain IV',
  },
  {
    code: 102030000,
    kor: '빅토리아로드: 페리온서쪽령',
    eng: 'Victoria Road: West Domain of Perion',
  },
  {
    code: 102040000,
    kor: '빅토리아로드: 커닝시티북쪽공사장',
    eng: 'Victoria Road: Construction Site North of Kerning City',
  },
  {
    code: 102040001,
    kor: '히든스트리트: 북쪽공사장꼭대기',
    eng: 'Hidden Street: Northern Top of Construction Site',
  },
  {
    code: 102050000,
    kor: '빅토리아로드: 해질녘하늘',
    eng: 'Victoria Road: Sunset Sky',
  },
  {
    code: 103000000,
    kor: '커닝시티: 커닝시티 파티 퀘스트',
    eng: 'Victoria Road: Kerning City',
  },
  {
    code: 103000101,
    kor: '커닝시티지하철: 1호선<1구역>',
    eng: 'Kerning City Subway: Line 1 <Area 1>',
  },
  {
    code: 103000102,
    kor: '커닝시티지하철: 환승구역',
    eng: 'Kerning City Subway: Transfer Area',
  },
  {
    code: 103000103,
    kor: '커닝시티지하철: 1호선<2구역>',
    eng: 'Kerning City Subway: Line 1 <Area 2>',
  },
  {
    code: 103000104,
    kor: '커닝시티지하철: 1호선<3구역>',
    eng: 'Kerning City Subway: Line 1 <Area 3>',
  },
  {
    code: 103000105,
    kor: '커닝시티지하철: 1호선<4구역>',
    eng: 'Kerning City Subway: Line 1 <Area 4>',
  },
  {
    code: 103000200,
    kor: '커닝시티지하철: 2호선<1구역>',
    eng: 'Kerning City Subway: Line 2 <Area 1>',
  },
  {
    code: 103000201,
    kor: '커닝시티지하철: 2호선<2구역>',
    eng: 'Kerning City Subway: Line 2 <Area 2>',
  },
  {
    code: 103000202,
    kor: '커닝시티지하철: 2호선<3구역>',
    eng: 'Kerning City Subway: Line 2 <Area 3>',
  },
  {
    code: 103000900,
    kor: '3호선공사장: B1<1구역>',
    eng: 'Line 3 Construction Site: B1 <Area 1>',
  },
  {
    code: 103000901,
    kor: '3호선공사장: B1<2구역>',
    eng: 'Line 3 Construction Site: B1 <Area 2>',
  },
  {
    code: 103000902,
    kor: '3호선공사장: B1<지하철기지창>',
    eng: 'Line 3 Construction Site: B1 <Subway Depot>',
  },
  {
    code: 103000903,
    kor: '3호선공사장: B2<1구역>',
    eng: 'Line 3 Construction Site: B2 <Area 1>',
  },
  {
    code: 103000904,
    kor: '3호선공사장: B2<2구역>',
    eng: 'Line 3 Construction Site: B2 <Area 2>',
  },
  {
    code: 103000905,
    kor: '3호선공사장: B2<지하철기지창>',
    eng: 'Line 3 Construction Site: B2 <Subway Depot>',
  },
  {
    code: 103000906,
    kor: '3호선공사장: B3<1구역>',
    eng: 'Line 3 Construction Site: B3 <Area 1>',
  },
  {
    code: 103000907,
    kor: '3호선공사장: B3<2구역>',
    eng: 'Line 3 Construction Site: B3 <Area 2>',
  },
  {
    code: 103000908,
    kor: '3호선공사장: B3<3구역>',
    eng: 'Line 3 Construction Site: B3 <Area 3>',
  },
  {
    code: 103000909,
    kor: '3호선공사장: B3<지하철기지창>',
    eng: 'Line 3 Construction Site: B3 <Subway Depot>',
  },
  {
    code: 103010000,
    kor: '빅토리아로드: 커닝시티공사장',
    eng: 'Victoria Road: Kerning City Construction Site',
  },
  {
    code: 103010001,
    kor: '히든스트리트: 추락주의',
    eng: 'Hidden Street: Caution Falling Down',
  },
  {
    code: 103020000,
    kor: '빅토리아로드: 니은숲 I',
    eng: 'Victoria Road: L Forest I',
  },
  {
    code: 103020100,
    kor: '빅토리아로드: 니은숲 II',
    eng: 'Victoria Road: L Forest II',
  },
  {
    code: 103020200,
    kor: '빅토리아로드: 니은숲 III',
    eng: 'Victoria Road: L Forest III',
  },
  {
    code: 103030000,
    kor: '빅토리아로드: 커닝시티중앙숲 I',
    eng: 'Victoria Road: Kerning City Middle Forest I',
  },
  {
    code: 103030100,
    kor: '빅토리아로드: 커닝시티중앙숲II',
    eng: 'Victoria Road: Kerning City Middle Forest II',
  },
  {
    code: 103030200,
    kor: '빅토리아로드: 커닝시티중앙숲III',
    eng: 'Victoria Road: Kerning City Middle Forest III',
  },
  {
    code: 104000100,
    kor: '포트로드: 리스항구외곽',
    eng: 'Victoria Road: Right Around Lith Harbor',
  },
  {
    code: 104000200,
    kor: '포트로드: 해안가풀숲1',
    eng: 'Victoria Road: Thicket Around the Beach I',
  },
  {
    code: 104000300,
    kor: '포트로드: 해안가풀숲2',
    eng: 'Victoria Road: Thicket Around the Beach II',
  },
  {
    code: 104000400,
    kor: '포트로드: 해안가풀숲3',
    eng: 'Victoria Road: Thicket Around the Beach III',
  },
  {
    code: 104010000,
    kor: '빅토리아로드: 세갈래길',
    eng: 'Victoria Road: 3-Way Road-Split',
  },
  {
    code: 104010001,
    kor: '히든스트리트: 돼지의 해안가',
    eng: 'Hidden Street: The Pig Beach',
  },
  {
    code: 104010002,
    kor: '히든스트리트: 해안가사냥터',
    eng: 'Hidden Street: Beach Hunting Ground',
  },
  {
    code: 104020000,
    kor: '빅토리아로드: 헤네시스서쪽숲',
    eng: 'Victoria Road: Forest West of Henesys',
  },
  {
    code: 104030000,
    kor: '빅토리아로드: 헤네시스서쪽언덕',
    eng: 'Victoria Road: A Hill West of Henesys ',
  },
  {
    code: 104030001,
    kor: '히든스트리트: 버섯동산',
    eng: 'Hidden Street: Mushroom Garden',
  },
  {
    code: 104040000,
    kor: '빅토리아로드: 헤네시스사냥터1',
    eng: 'Victoria Road: Henesys Hunting Ground I',
  },
  {
    code: 104040001,
    kor: '빅토리아로드: 헤네시스사냥터2',
    eng: 'Victoria Road: Henesys Hunting Ground II',
  },
  {
    code: 104040002,
    kor: '빅토리아로드: 헤네시스사냥터3',
    eng: 'Victoria Road: Henesys Hunting Ground III',
  },
  {
    code: 105030000,
    kor: '던전: 깊은숲',
    eng: 'Dungeon: Deep Forest',
  },
  {
    code: 105040000,
    kor: '던전: 깊은숲 습지',
    eng: 'Dungeon: Swampy Land in a Deep Forest',
  },
  {
    code: 105040100,
    kor: '던전: 깊은숲사냥터1',
    eng: 'Dungeon: Hunting Ground in the Deep Forest I',
  },
  {
    code: 105040200,
    kor: '던전: 깊은숲사냥터2',
    eng: 'Dungeon: Hunting Ground in the Deep Forest II',
  },
  {
    code: 105040301,
    kor: '던전: 슬리피던전1',
    eng: 'Dungeon: Sleepy Dungeon I',
  },
  {
    code: 105040302,
    kor: '던전: 슬리피던전2',
    eng: 'Dungeon: Sleepy Dungeon II',
  },
  {
    code: 105040303,
    kor: '던전: 슬리피던전3',
    eng: 'Dungeon: Sleepy Dungeon III',
  },
  {
    code: 105040304,
    kor: '던전: 슬리피던전4',
    eng: 'Dungeon: Sleepy Dungeon IV',
  },
  {
    code: 105040305,
    kor: '던전: 슬리피던전5',
    eng: 'Dungeon: Sleepy Dungeon V',
  },
  {
    code: 105040306,
    kor: '히든스트리트: 골렘의 숲',
    eng: 'Dungeon: The forest of Golem',
  },
  {
    code: 105050000,
    kor: '던전: 개미굴1',
    eng: 'Dungeon: Ant Tunnel I',
  },
  {
    code: 105050100,
    kor: '던전: 개미굴2',
    eng: 'Dungeon: Ant Tunnel II',
  },
  {
    code: 105050200,
    kor: '던전: 개미굴3',
    eng: 'Dungeon: Ant Tunnel III',
  },
  {
    code: 105050300,
    kor: '던전: 개미굴4',
    eng: 'Dungeon: Ant Tunnel IV',
  },
  {
    code: 105050400,
    kor: '던전: 어두운통로',
    eng: 'Dungeon: Dark Cave',
  },
  {
    code: 105060000,
    kor: '던전: 위험한증기',
    eng: 'Dungeon: Dangerous Steam',
  },
  {
    code: 105060100,
    kor: '던전: 깊은개미굴1',
    eng: 'Dungeon: Deep Ant Tunnel I',
  },
  {
    code: 105070000,
    kor: '던전: 깊은개미굴2',
    eng: 'Dungeon: Deep Ant Tunnel II',
  },
  {
    code: 105070001,
    kor: '던전: 개미굴광장',
    eng: 'Dungeon: Ant Tunnel Park',
  },
  {
    code: 105070002,
    kor: '던전: 머쉬맘의 무덤',
    eng: 'Dungeon: The Grave of Mushmom',
  },
  {
    code: 105070100,
    kor: '던전: 이블아이의굴1',
    eng: 'Dungeon: The Cave of Evil Eye I',
  },
  {
    code: 105070200,
    kor: '던전: 이블아이의굴2',
    eng: 'Dungeon: The Cave of Evil Eye II',
  },
  {
    code: 105070300,
    kor: '던전: 이블아이의굴3',
    eng: 'Dungeon: The Cave of Evil Eye III',
  },
  {
    code: 105070400,
    kor: '던전: 이블아이의굴4',
    eng: 'Dungeon: The Cave of Evil Eye IV',
  },
  {
    code: 105080000,
    kor: '던전: 드레이크사냥터',
    eng: 'Dungeon: Drake Hunting Ground',
  },
  {
    code: 105090000,
    kor: '던전: 빛을잃은동굴1',
    eng: 'Dungeon: The Tunnel That Lost Light I',
  },
  {
    code: 105090100,
    kor: '던전: 빛을잃은동굴2',
    eng: 'Dungeon: The Tunnel That Lost Light II',
  },
  {
    code: 105090200,
    kor: '던전: 또다른입구',
    eng: 'Dungeon: Another Entrance',
  },
  {
    code: 105090300,
    kor: '던전: 드레이크의밥상',
    eng: "Dungeon: Drake's Meal Table",
  },
  {
    code: 105090301,
    kor: '던전: 와일드카고의영역',
    eng: "Dungeon: Wild Cargo's Area",
  },
  {
    code: 105090310,
    kor: '던전: 드레이크의 영역',
    eng: 'Dungeon: Drake Area',
  },
  {
    code: 105090311,
    kor: '던전: 차가운 요람',
    eng: 'Dungeon: Cold Cradle',
  },
  {
    code: 105090312,
    kor: '던전: 드레이크의 둥지',
    eng: "Dungeon: Drake's Nest",
  },
  {
    code: 105090400,
    kor: '던전: 또다른길',
    eng: 'Dungeon: Another Path',
  },
  {
    code: 105090500,
    kor: '던전: 신전의입구1',
    eng: 'Dungeon: Sanctuary Entrance I',
  },
  {
    code: 105090600,
    kor: '던전: 신전의입구2',
    eng: 'Dungeon: Sanctuary Entrance II',
  },
  {
    code: 105090700,
    kor: '던전: 신전의입구3',
    eng: 'Dungeon: Sanctuary Entrance III',
  },
  {
    code: 105090800,
    kor: '던전: 신전의입구4',
    eng: 'Dungeon: Sanctuary Entrance IV',
  },
  {
    code: 105090900,
    kor: '던전: 저주받은신전',
    eng: 'Dungeon: The Cursed Sanctuary',
  },
  {
    code: 106000000,
    kor: '워닝스트리트: 깊은골짜기1',
    eng: 'Warning Street: Deep Valley I',
  },
  {
    code: 106000001,
    kor: '히든스트리트: 위험한골짜기',
    eng: 'Hidden Street: Dangerous Valley',
  },
  {
    code: 106000002,
    kor: '히든스트리트: 위험한골짜기2',
    eng: 'Hidden Street: Dangerous Valley II',
  },
  {
    code: 106000100,
    kor: '워닝스트리트: 깊은골짜기2',
    eng: 'Warning Street: Deep Valley II',
  },
  {
    code: 106000101,
    kor: '워닝스트리트: 불타버린땅1',
    eng: 'Warning Street: The Burnt Land I',
  },
  {
    code: 106000110,
    kor: '워닝스트리트: 불타버린땅2',
    eng: 'Warning Street: The Burnt Land II',
  },
  {
    code: 106000120,
    kor: '워닝스트리트: 불타버린땅3',
    eng: 'Warning Street: The Burnt Land III',
  },
  {
    code: 106000130,
    kor: '워닝스트리트: 불타버린땅4',
    eng: 'Warning Street: The Burnt Land IV',
  },
  {
    code: 106000140,
    kor: '워닝스트리트: 불타버린땅5',
    eng: 'Warning Street: The Burnt Land V',
  },
  {
    code: 106000200,
    kor: '워닝스트리트: 깊은골짜기3',
    eng: 'Warning Street: Deep Valley III',
  },
  {
    code: 106000300,
    kor: '워닝스트리트: 페리온던전입구',
    eng: 'Warning Street: Perion Dungeon Entrance',
  },
  {
    code: 106010000,
    kor: '워닝스트리트: 던전으로가는길',
    eng: 'Warning Street: The Road to the Dungeon',
  },
  {
    code: 106010100,
    kor: '워닝스트리트: 헤네시스던전입구',
    eng: 'Warning Street: Henesys Dungeon Entrance',
  },
  {
    code: 106010101,
    kor: '히든스트리트: 숨쉬는바위',
    eng: 'Hidden Street: The Breathing Rock',
  },
  {
    code: 106010102,
    kor: '히든스트리트: 골렘의사원입구',
    eng: "Victoria Road: The Entrance of Golem's Temple",
  },
  {
    code: 106010103,
    kor: '히든스트리트: 골렘의사원1',
    eng: "Victoria Road: Golem's Temple I",
  },
  {
    code: 106010104,
    kor: '히든스트리트: 골렘의사원2',
    eng: "Victoria Road: Golem's Temple II",
  },
  {
    code: 106010105,
    kor: '히든스트리트: 골렘의사원3',
    eng: "Victoria Road: Golem's Temple III",
  },
  {
    code: 106010106,
    kor: '히든스트리트: 골렘의사원4',
    eng: "Victoria Road: Golem's Temple IV",
  },
  {
    code: 107000000,
    kor: '워닝스트리트: 방황의늪1',
    eng: 'Warning Street: The Swamp of Despair I',
  },
  {
    code: 107000001,
    kor: '히든스트리트: 주니어네키의 늪',
    eng: 'Hidden Street: Swamp of the Jr.Necki',
  },
  {
    code: 107000100,
    kor: '워닝스트리트: 방황의늪2',
    eng: 'Warning Street: The Swamp of Despair II',
  },
  {
    code: 107000200,
    kor: '워닝스트리트: 방황의늪3',
    eng: 'Warning Street: The Swamp of Despair III',
  },
  {
    code: 107000300,
    kor: '워닝스트리트: 위험한크로코1',
    eng: 'Warning Street: Dangerous Croko I',
  },
  {
    code: 107000400,
    kor: '워닝스트리트: 위험한크로코2',
    eng: 'Warning Street: Dangerous Croko II',
  },
  {
    code: 107000401,
    kor: '히든스트리트: 원숭이의늪1',
    eng: 'Hidden Street: Monkey Swamp I',
  },
  {
    code: 107000402,
    kor: '히든스트리트: 원숭이의늪2',
    eng: 'Hidden Street: Monkey Swamp II',
  },
  {
    code: 107000403,
    kor: '히든스트리트: 원숭이의늪3',
    eng: 'Hidden Street: Monkey Swamp III',
  },
  {
    code: 107000500,
    kor: '던전: 축축한나무숲',
    eng: 'Dungeon: Damp Tree-Forest',
  },
  {
    code: 107000501,
    kor: '던전: 축축한나무숲습지',
    eng: 'Dungeon: Damp Forest',
  },
  {
    code: 109010100,
    kor: '히든스트리트: 동쪽필드',
    eng: 'Hidden Street: Eastern Field',
  },
  {
    code: 109010200,
    kor: '히든스트리트: 남쪽필드',
    eng: 'Hidden Street: Southern Field',
  },
  {
    code: 110010000,
    kor: '플로리나로드: 해변가원두막',
    eng: 'Florina Road: A Look-Out Shed Around the Beach',
  },
  {
    code: 110020000,
    kor: '플로리나로드: 로랑로랑',
    eng: 'Florina Road: Lorang Lorang',
  },
  {
    code: 110020001,
    kor: '히든스트리트: 로랑로랑로랑',
    eng: 'Hidden Street: Lorang Lorang Lorang',
  },
  {
    code: 110030000,
    kor: '플로리나로드: 로랑앤클랑',
    eng: 'Florina Road: Lorang and Clang',
  },
  {
    code: 110030001,
    kor: '히든스트리트: 클랑앤로랑',
    eng: 'Florina Road: Clang and Lorang',
  },
  {
    code: 110040000,
    kor: '플로리나로드: 따뜻한모래밭',
    eng: 'Florina Road: Hot Sand',
  },
  {
    code: 200010000,
    kor: '스카이로드: 구름공원1',
    eng: 'Orbis: Cloud Park I',
  },
  {
    code: 200010100,
    kor: '스카이로드: 세가지빛정원으로가는길',
    eng: 'Orbis: The Road to Garden of 3 Colors',
  },
  {
    code: 200010110,
    kor: '스카이로드: 붉은빛의정원1',
    eng: 'Orbis: Garden of Red I',
  },
  {
    code: 200010111,
    kor: '스카이로드: 붉은빛의정원2',
    eng: 'Orbis: Garden of Red II',
  },
  {
    code: 200010120,
    kor: '스카이로드: 노란빛의정원1',
    eng: 'Orbis: Garden of Yellow I',
  },
  {
    code: 200010121,
    kor: '스카이로드: 노란빛의정원2',
    eng: 'Orbis: Garden of Yellow II',
  },
  {
    code: 200010130,
    kor: '스카이로드: 푸른빛의정원1',
    eng: 'Orbis: Garden of Green I',
  },
  {
    code: 200010131,
    kor: '스카이로드: 푸른빛의정원2',
    eng: 'Orbis: Garden of Green II',
  },
  {
    code: 200010200,
    kor: '스카이로드: 하늘계단1',
    eng: 'Orbis: Stairway to the Sky I',
  },
  {
    code: 200010300,
    kor: '스카이로드: 하늘계단2',
    eng: 'Orbis: Stairway to the Sky II',
  },
  {
    code: 200010301,
    kor: '스카이로드: 검은빛의정원1',
    eng: 'Orbis: Garden of Darkness I',
  },
  {
    code: 200010302,
    kor: '스카이로드: 검은빛의정원2',
    eng: 'Orbis: Garden of Darkness II',
  },
  {
    code: 200020000,
    kor: '스카이로드: 구름공원2',
    eng: 'Orbis: Cloud Park II',
  },
  {
    code: 200030000,
    kor: '스카이로드: 산책로',
    eng: 'Orbis: Strolling Path',
  },
  {
    code: 200040000,
    kor: '스카이로드: 구름공원3',
    eng: 'Orbis: Cloud Park III',
  },
  {
    code: 200040001,
    kor: '스카이로드: 버려진화원',
    eng: 'Orbis: Disposed Flower Garden',
  },
  {
    code: 200050000,
    kor: '스카이로드: 구름공원4',
    eng: 'Orbis: Cloud Park IV',
  },
  {
    code: 200050001,
    kor: '스카이로드: 노파의집',
    eng: "Orbis: Old Man's House",
  },
  {
    code: 200060000,
    kor: '스카이로드: 산책로2',
    eng: 'Orbis: Strolling Path II',
  },
  {
    code: 200070000,
    kor: '스카이로드: 구름공원5',
    eng: 'Orbis: Cloud Park V',
  },
  {
    code: 200080000,
    kor: '스카이로드: 구름공원6',
    eng: 'Orbis: Cloud Park VI',
  },
  {
    code: 200080101,
    kor: '히든스트리트: 오르비스 파티 퀘스트',
    eng: 'Orbis: The Unknown Tower',
  },
  {
    code: 200080200,
    kor: '오르비스탑: 오르비스탑<20층>',
    eng: 'Orbis: Orbis Tower <20th Floor>',
  },
  {
    code: 200080300,
    kor: '오르비스탑: 오르비스탑<19층>',
    eng: 'Orbis: Orbis Tower <19th Floor>',
  },
  {
    code: 200080400,
    kor: '오르비스탑: 오르비스탑<18층>',
    eng: 'Orbis: Orbis Tower <18th Floor>',
  },
  {
    code: 200080500,
    kor: '오르비스탑: 오르비스탑<17층>',
    eng: 'Orbis: Orbis Tower <17th Floor>',
  },
  {
    code: 200080600,
    kor: '오르비스탑: 오르비스탑<16층>',
    eng: 'Orbis: Orbis Tower <16th Floor>',
  },
  {
    code: 200080700,
    kor: '오르비스탑: 오르비스탑<15층>',
    eng: 'Orbis: Orbis Tower <15th Floor>',
  },
  {
    code: 200080800,
    kor: '오르비스탑: 오르비스탑<14층>',
    eng: 'Orbis: Orbis Tower <14th Floor>',
  },
  {
    code: 200080900,
    kor: '오르비스탑: 오르비스탑<13층>',
    eng: 'Orbis: Orbis Tower <13th Floor>',
  },
  {
    code: 200081000,
    kor: '오르비스탑: 오르비스탑<12층>',
    eng: 'Orbis: Orbis Tower <12th Floor>',
  },
  {
    code: 200081100,
    kor: '오르비스탑: 오르비스탑<11층>',
    eng: 'Orbis: Orbis Tower <11th Floor>',
  },
  {
    code: 200081200,
    kor: '오르비스탑: 오르비스탑<10층>',
    eng: 'Orbis: Orbis Tower <10th Floor>',
  },
  {
    code: 200081300,
    kor: '오르비스탑: 오르비스탑<9층>',
    eng: 'Orbis: Orbis Tower <9th Floor>',
  },
  {
    code: 200081400,
    kor: '오르비스탑: 오르비스탑<8층>',
    eng: 'Orbis: Orbis Tower <8th Floor>',
  },
  {
    code: 200081500,
    kor: '오르비스탑: 오르비스탑<7층>',
    eng: 'Orbis: Orbis Tower <7th Floor>',
  },
  {
    code: 200081600,
    kor: '오르비스탑: 오르비스탑<6층>',
    eng: 'Orbis: Orbis Tower <6th Floor>',
  },
  {
    code: 200081700,
    kor: '오르비스탑: 오르비스탑<5층>',
    eng: 'Orbis: Orbis Tower <5th Floor>',
  },
  {
    code: 200081800,
    kor: '오르비스탑: 오르비스탑<4층>',
    eng: 'Orbis: Orbis Tower <4th Floor>',
  },
  {
    code: 200081900,
    kor: '오르비스탑: 오르비스탑<3층>',
    eng: 'Orbis: Orbis Tower <3rd Floor>',
  },
  {
    code: 200082000,
    kor: '오르비스탑: 오르비스탑<2층>',
    eng: 'Orbis: Orbis Tower <2nd Floor>',
  },
  {
    code: 200082100,
    kor: '오르비스탑: 오르비스탑<1층>',
    eng: 'Orbis: Orbis Tower <1st Floor>',
  },
  {
    code: 200082200,
    kor: '오르비스탑: 오르비스탑<지하1층>',
    eng: 'Orbis: Orbis Tower<B1>',
  },
  {
    code: 200082300,
    kor: '오르비스탑: 오르비스탑<지하2층>',
    eng: 'Orbis: Orbis Tower<B2>',
  },
  {
    code: 211000200,
    kor: '엘나스산맥: 눈 덮인 언덕',
    eng: 'El Nath: Snowy Hill',
  },
  {
    code: 211010000,
    kor: '엘나스산맥: 빙판조심1',
    eng: 'El Nath: Watch Out for Icy Path I',
  },
  {
    code: 211020000,
    kor: '엘나스산맥: 빙판조심2',
    eng: 'El Nath: Watch Out for Icy Path II',
  },
  {
    code: 211030000,
    kor: '엘나스산맥: 차가운벌판1',
    eng: 'El Nath: Cold Field I',
  },
  {
    code: 211040000,
    kor: '엘나스산맥: 차가운벌판2',
    eng: 'El Nath: Cold Field II',
  },
  {
    code: 211040001,
    kor: '히든스트리트: 왕관을휘날리며',
    eng: 'Hidden Street: The Crown-Flyer',
  },
  {
    code: 211040100,
    kor: '엘나스산맥: 얼음골짜기1',
    eng: 'El Nath: Ice Valley I',
  },
  {
    code: 211040101,
    kor: '히든스트리트: 설인의 골짜기',
    eng: 'Hidden Street: Valley of Snowman',
  },
  {
    code: 211040200,
    kor: '엘나스산맥: 얼음골짜기2',
    eng: 'El Nath: Ice Valley II',
  },
  {
    code: 211040300,
    kor: '폐광: 날카로운절벽1',
    eng: 'El Nath: Sharp Cliff I',
  },
  {
    code: 211040400,
    kor: '폐광: 날카로운절벽2',
    eng: 'El Nath: Sharp Cliff II',
  },
  {
    code: 211040401,
    kor: '폐광: 설원의성지',
    eng: 'Hidden Street: Holy Ground at the Snowfield',
  },
  {
    code: 211040500,
    kor: '폐광: 늑대의영역1',
    eng: 'El Nath: Wolf Territory I',
  },
  {
    code: 211040600,
    kor: '폐광: 늑대의영역2',
    eng: 'El Nath: Wolf Territory II',
  },
  {
    code: 211040700,
    kor: '폐광: 위험한절벽',
    eng: 'El Nath: Dangerous Cliff',
  },
  {
    code: 211040800,
    kor: '폐광: 늑대의영역3',
    eng: 'El Nath: Wolf Territory III',
  },
  {
    code: 211040900,
    kor: '폐광: 늑대의영역4',
    eng: 'El Nath: Wolf Territory IV',
  },
  {
    code: 211041000,
    kor: '폐광: 늑대의영역5',
    eng: 'El Nath: Wolf Territory V',
  },
  {
    code: 211041100,
    kor: '폐광: 죽은나무의숲1',
    eng: 'El Nath: Forest of Dead Trees I',
  },
  {
    code: 211041200,
    kor: '폐광: 죽은나무의숲2',
    eng: 'El Nath: Forest of Dead Trees II',
  },
  {
    code: 211041300,
    kor: '폐광: 죽은나무의숲3',
    eng: 'El Nath: Forest of Dead Trees III',
  },
  {
    code: 211041400,
    kor: '폐광: 죽은나무의숲4',
    eng: 'El Nath: Forest of Dead Trees IV',
  },
  {
    code: 211041500,
    kor: '폐광: 폐광1',
    eng: 'El Nath: Dead Mine I',
  },
  {
    code: 211041600,
    kor: '폐광: 폐광2',
    eng: 'El Nath: Dead Mine II',
  },
  {
    code: 211041700,
    kor: '폐광: 폐광3',
    eng: 'El Nath: Dead Mine III',
  },
  {
    code: 211041800,
    kor: '폐광: 폐광4',
    eng: 'El Nath: Dead Mine IV',
  },
  {
    code: 211041900,
    kor: '폐광: 통로',
    eng: 'El Nath: The Passage',
  },
  {
    code: 211042000,
    kor: '폐광: 시련의 동굴1',
    eng: 'El Nath: The Cave of Trial I',
  },
  {
    code: 211042100,
    kor: '폐광: 시련의 동굴2',
    eng: 'El Nath: The Cave of Trial II',
  },
  {
    code: 211042101,
    kor: '폐광: 동굴 속 동굴',
    eng: 'Hidden Street: Cave Within the Cave',
  },
  {
    code: 211042200,
    kor: '폐광: 시련의 동굴3',
    eng: 'El Nath: The Cave of Trial III',
  },
  {
    code: 211042300,
    kor: '폐광: 자쿰으로통하는문',
    eng: 'El Nath: The Door to Zakum',
  },
  {
    code: 211042400,
    kor: '폐광: 자쿰의 제단 입구',
    eng: 'El Nath: Entrance to Zakum Altar',
  },
  {
    code: 211050000,
    kor: '엘나스산맥: 차디찬벌판',
    eng: 'El Nath: Icy Cold Field',
  },
  {
    code: 220010000,
    kor: '루디브리엄성: 구름테라스<5>',
    eng: 'Ludibrium: Cloud Terrace<5>',
  },
  {
    code: 220010001,
    kor: '히든스트리트: 구름발코니',
    eng: 'Ludibrium: Cloud Balcony',
  },
  {
    code: 220010100,
    kor: '루디브리엄성: 구름테라스<4>',
    eng: 'Ludibrium: Cloud Terrace<4>',
  },
  {
    code: 220010200,
    kor: '루디브리엄성: 구름테라스<3>',
    eng: 'Ludibrium: Cloud Terrace<3>',
  },
  {
    code: 220010300,
    kor: '루디브리엄성: 구름테라스<2>',
    eng: 'Ludibrium: Cloud Terrace<2>',
  },
  {
    code: 220010400,
    kor: '루디브리엄성: 구름테라스<1>',
    eng: 'Ludibrium: Cloud Terrace<1>',
  },
  {
    code: 220010500,
    kor: '루디브리엄성: 테라스홀',
    eng: 'Ludibrium: Terrace Hall',
  },
  {
    code: 220010600,
    kor: '루디브리엄성: 하늘테라스<1>',
    eng: 'Ludibrium: Sky Terrace<1>',
  },
  {
    code: 220010700,
    kor: '루디브리엄성: 하늘테라스<2>',
    eng: 'Ludibrium: Sky Terrace<2>',
  },
  {
    code: 220010800,
    kor: '루디브리엄성: 하늘테라스<3>',
    eng: 'Ludibrium: Sky Terrace<3>',
  },
  {
    code: 220010900,
    kor: '루디브리엄성: 하늘테라스<4>',
    eng: 'Ludibrium: Sky Terrace<4>',
  },
  {
    code: 220011000,
    kor: '루디브리엄성: 하늘테라스<5>',
    eng: 'Ludibrium: Sky Terrace<5>',
  },
  {
    code: 220011001,
    kor: '히든스트리트: 하늘발코니',
    eng: 'Ludibrium: Sky Terrace',
  },
  {
    code: 220020000,
    kor: '루디브리엄성: 장난감공장<1공정>1구역',
    eng: 'Ludibrium: Toy Factory <Process 1> Zone 1',
  },
  {
    code: 220020100,
    kor: '루디브리엄성: 장난감공장<1공정>2구역',
    eng: 'Ludibrium: Toy Factory <Process 1> Zone 2',
  },
  {
    code: 220020200,
    kor: '루디브리엄성: 장난감공장<1공정>3구역',
    eng: 'Ludibrium: Toy Factory <Process 1> Zone 3',
  },
  {
    code: 220020300,
    kor: '루디브리엄성: 장난감공장<메인공정1>',
    eng: 'Ludibrium: Toy Factory <Main Process 1>',
  },
  {
    code: 220020400,
    kor: '루디브리엄성: 장난감공장<1공정>5구역',
    eng: 'Ludibrium: Toy Factory <Process 1> Zone 5',
  },
  {
    code: 220020500,
    kor: '루디브리엄성: 장난감공장<1공정>6구역',
    eng: 'Ludibrium: Toy Factory <Process 1> Zone 6',
  },
  {
    code: 220020600,
    kor: '루디브리엄성: 장난감공장<기계실>',
    eng: 'Ludibrium: Toy Factory <Aparatus Room>',
  },
  {
    code: 220030000,
    kor: '루디브리엄성: 장난감공장<2공정>1구역',
    eng: 'Ludibrium: Toy Factory <Process 2> Zone 1',
  },
  {
    code: 220030100,
    kor: '루디브리엄성: 장난감공장<2공정>2구역',
    eng: 'Ludibrium: Toy Factory <Process 2> Zone 2',
  },
  {
    code: 220030200,
    kor: '루디브리엄성: 장난감공장<메인공정2>',
    eng: 'Ludibrium: Toy Factory <Main Process 2>',
  },
  {
    code: 220030300,
    kor: '루디브리엄성: 장난감공장<2공정>4구역',
    eng: 'Ludibrium: Toy Factory <Process 2> Zone 3',
  },
  {
    code: 220030400,
    kor: '루디브리엄성: 장난감공장<2공정>5구역',
    eng: 'Ludibrium: Toy Factory <Process 2> Zone 4',
  },
  {
    code: 220040000,
    kor: '루디브리엄성: 시간의길<1>',
    eng: 'Ludibrium: The Path of Time <1>',
  },
  {
    code: 220040100,
    kor: '루디브리엄성: 시간의길<2>',
    eng: 'Ludibrium: The Path of Time <2>',
  },
  {
    code: 220040200,
    kor: '루디브리엄성: 시간의갈림길',
    eng: 'Ludibrium: Crossroad of Time',
  },
  {
    code: 220040300,
    kor: '루디브리엄성: 시간의길<3>',
    eng: 'Ludibrium: The Path of Time <3>',
  },
  {
    code: 220040400,
    kor: '루디브리엄성: 시간의길<4>',
    eng: 'Ludibrium: The Path of Time <4>',
  },
  {
    code: 220050000,
    kor: '루디브리엄성: 잃어버린시간<1>',
    eng: 'Ludibrium: Lost Time <1>',
  },
  {
    code: 220050100,
    kor: '루디브리엄성: 시간의소용돌이',
    eng: 'Ludibrium: Whirlpool of Time',
  },
  {
    code: 220050200,
    kor: '루디브리엄성: 잃어버린시간<2>',
    eng: 'Ludibrium: Lost Time <2>',
  },
  {
    code: 220050300,
    kor: '시계탑최하층: 시간의 통로',
    eng: 'Ludibrium: Path of Time',
  },
  {
    code: 220060000,
    kor: '시계탑최하층: 뒤틀린 시간의 길<1>',
    eng: 'Ludibrium: Warped Path of Time<1>',
  },
  {
    code: 220060100,
    kor: '시계탑최하층: 뒤틀린 시간의 길<2>',
    eng: 'Ludibrium: Warped Path of Time<2>',
  },
  {
    code: 220060200,
    kor: '시계탑최하층: 뒤틀린 시간의 길<3>',
    eng: 'Ludibrium: Warped Path of Time<3>',
  },
  {
    code: 220060201,
    kor: '히든스트리트: 삐뚤어진 시간',
    eng: 'Hidden Street: Unbalanced Time',
  },
  {
    code: 220060300,
    kor: '시계탑최하층: 뒤틀린 시간의 길<4>',
    eng: 'Ludibrium: Warped Path of Time<4>',
  },
  {
    code: 220060301,
    kor: '히든스트리트: 꼬여버린 시간',
    eng: 'Hidden Street: Twisted Time',
  },
  {
    code: 220060400,
    kor: '시계탑최하층: 뒤틀린 회랑',
    eng: 'Ludibrium: Warped Passage',
  },
  {
    code: 220070000,
    kor: '시계탑최하층: 잊혀진 시간의 길<1>',
    eng: 'Ludibrium: Forgotten Path of Time<1>',
  },
  {
    code: 220070100,
    kor: '시계탑최하층: 잊혀진 시간의 길<2>',
    eng: 'Ludibrium: Forgotten Path of Time<2>',
  },
  {
    code: 220070200,
    kor: '시계탑최하층: 잊혀진 시간의 길<3>',
    eng: 'Ludibrium: Forgotten Path of Time<3>',
  },
  {
    code: 220070201,
    kor: '히든스트리트: 사라진 시간',
    eng: 'Hidden Street: Lost Time',
  },
  {
    code: 220070300,
    kor: '시계탑최하층: 잊혀진 시간의 길<4>',
    eng: 'Ludibrium: Forgotten Path of Time<4>',
  },
  {
    code: 220070301,
    kor: '히든스트리트: 금지된 시간',
    eng: 'Hidden Street: Forbidden Time',
  },
  {
    code: 220070400,
    kor: '시계탑최하층: 잊혀진 회랑',
    eng: 'Ludibrium: Forgotten Passage',
  },
  {
    code: 220080000,
    kor: '시계탑최하층: 시계탑 깊은 곳',
    eng: 'Ludibrium: Deep Inside the Clocktower',
  },
  {
    code: 220080001,
    kor: '시계탑최하층: 시계탑의 근원',
    eng: 'Ludibrium: Origin of Clocktower',
  },
  {
    code: 221020000,
    kor: '에오스탑: 에오스탑 1층',
    eng: 'Ludibrium: Eos Tower 1st Floor',
  },
  {
    code: 221020100,
    kor: '에오스탑: 에오스탑 2층',
    eng: 'Ludibrium: Eos Tower 2nd Floor',
  },
  {
    code: 221020200,
    kor: '에오스탑: 에오스탑 3층',
    eng: 'Ludibrium: Eos Tower 3rd Floor',
  },
  {
    code: 221020300,
    kor: '에오스탑: 에오스탑 4층',
    eng: 'Ludibrium: Eos Tower 4th Floor',
  },
  {
    code: 221020400,
    kor: '에오스탑: 에오스탑 5층',
    eng: 'Ludibrium: Eos Tower 5th Floor',
  },
  {
    code: 221020500,
    kor: '에오스탑: 에오스탑 6층',
    eng: 'Ludibrium: Eos Tower 6th Floor',
  },
  {
    code: 221020600,
    kor: '에오스탑: 에오스탑 7층',
    eng: 'Ludibrium: Eos Tower 7th Floor',
  },
  {
    code: 221020700,
    kor: '에오스탑: 에오스탑 8층',
    eng: 'Ludibrium: Eos Tower 8th Floor',
  },
  {
    code: 221020701,
    kor: '히든스트리트: 숨겨진 탑',
    eng: 'Hidden Street: Hidden Tower',
  },
  {
    code: 221020800,
    kor: '에오스탑: 에오스탑 9층',
    eng: 'Ludibrium: Eos Tower 9th Floor',
  },
  {
    code: 221020900,
    kor: '에오스탑: 에오스탑 10층',
    eng: 'Ludibrium: Eos Tower 10th Floor',
  },
  {
    code: 221021000,
    kor: '에오스탑: 에오스탑 11층~20층',
    eng: 'Ludibrium: Eos Tower 11th ~ 20th Floor',
  },
  {
    code: 221021100,
    kor: '에오스탑: 에오스탑 21층',
    eng: 'Ludibrium: Eos Tower 21st Floor',
  },
  {
    code: 221021200,
    kor: '에오스탑: 에오스탑 22층',
    eng: 'Ludibrium: Eos Tower 22nd Floor',
  },
  {
    code: 221021300,
    kor: '에오스탑: 에오스탑 23층',
    eng: 'Ludibrium: Eos Tower 23rd Floor',
  },
  {
    code: 221021400,
    kor: '에오스탑: 에오스탑 24층',
    eng: 'Ludibrium: Eos Tower 24th Floor',
  },
  {
    code: 221021500,
    kor: '에오스탑: 에오스탑 25층',
    eng: 'Ludibrium: Eos Tower 25th Floor',
  },
  {
    code: 221021600,
    kor: '에오스탑: 에오스탑 26층~40층',
    eng: 'Ludibrium: Eos Tower 26th ~ 40th Floor',
  },
  {
    code: 221021700,
    kor: '에오스탑: 에오스탑 41층',
    eng: 'Ludibrium: Eos Tower 41st Floor',
  },
  {
    code: 221021800,
    kor: '에오스탑: 에오스탑 42층',
    eng: 'Ludibrium: Eos Tower 42nd Floor',
  },
  {
    code: 221021900,
    kor: '에오스탑: 에오스탑 43층',
    eng: 'Ludibrium: Eos Tower 43rd Floor',
  },
  {
    code: 221022000,
    kor: '에오스탑: 에오스탑 44층',
    eng: 'Ludibrium: Eos Tower 44th Floor',
  },
  {
    code: 221022100,
    kor: '에오스탑: 에오스탑 45층',
    eng: 'Ludibrium: Eos Tower 45th Floor',
  },
  {
    code: 221022200,
    kor: '에오스탑: 에오스탑 46층~55층',
    eng: 'Ludibrium: Eos Tower 46th ~ 55th Floor',
  },
  {
    code: 221022300,
    kor: '에오스탑: 에오스탑 56층',
    eng: 'Ludibrium: Eos Tower 56th Floor',
  },
  {
    code: 221022400,
    kor: '에오스탑: 에오스탑 57층',
    eng: 'Ludibrium: Eos Tower 57th Floor',
  },
  {
    code: 221022500,
    kor: '에오스탑: 에오스탑 58층',
    eng: 'Ludibrium: Eos Tower 58th Floor',
  },
  {
    code: 221022600,
    kor: '에오스탑: 에오스탑 59층',
    eng: 'Ludibrium: Eos Tower 59th Floor',
  },
  {
    code: 221022700,
    kor: '에오스탑: 에오스탑 60층',
    eng: 'Ludibrium: Eos Tower 60th Floor',
  },
  {
    code: 221022800,
    kor: '에오스탑: 에오스탑 61층~70층',
    eng: 'Ludibrium: Eos Tower 61st ~ 70th Floor',
  },
  {
    code: 221022900,
    kor: '에오스탑: 에오스탑 71층',
    eng: 'Ludibrium: Eos Tower 71st Floor',
  },
  {
    code: 221023000,
    kor: '에오스탑: 에오스탑 72층',
    eng: 'Ludibrium: Eos Tower 72nd Floor',
  },
  {
    code: 221023100,
    kor: '에오스탑: 에오스탑 73층',
    eng: 'Ludibrium: Eos Tower 73rd Floor',
  },
  {
    code: 221023200,
    kor: '에오스탑: 에오스탑 74층',
    eng: 'Ludibrium: Eos Tower 74th Floor',
  },
  {
    code: 221023300,
    kor: '에오스탑: 에오스탑 75층',
    eng: 'Ludibrium: Eos Tower 75th Floor',
  },
  {
    code: 221023400,
    kor: '에오스탑: 에오스탑76층~90층',
    eng: 'Ludibrium: Eos Tower 76th ~ 90th Floor',
  },
  {
    code: 221023500,
    kor: '에오스탑: 에오스탑91층',
    eng: 'Ludibrium: Eos Tower 91st Floor',
  },
  {
    code: 221023600,
    kor: '에오스탑: 에오스탑92층',
    eng: 'Ludibrium: Eos Tower 92nd Floor',
  },
  {
    code: 221023700,
    kor: '에오스탑: 에오스탑93층',
    eng: 'Ludibrium: Eos Tower 93rd Floor',
  },
  {
    code: 221023800,
    kor: '에오스탑: 에오스탑94층',
    eng: 'Ludibrium: Eos Tower 94th Floor',
  },
  {
    code: 221023900,
    kor: '에오스탑: 에오스탑95층',
    eng: 'Ludibrium: Eos Tower 95th Floor',
  },
  {
    code: 221024000,
    kor: '에오스탑: 에오스탑96층',
    eng: 'Ludibrium: Eos Tower 96th Floor',
  },
  {
    code: 221024100,
    kor: '에오스탑: 에오스탑97층',
    eng: 'Ludibrium: Eos Tower 97th Floor',
  },
  {
    code: 221024200,
    kor: '에오스탑: 에오스탑98층',
    eng: 'Ludibrium: Eos Tower 98th Floor',
  },
  {
    code: 221024300,
    kor: '에오스탑: 에오스탑99층',
    eng: 'Ludibrium: Eos Tower 99th Floor',
  },
  {
    code: 221024400,
    kor: '에오스탑: 에오스탑100층',
    eng: 'Ludibrium: Eos Tower 100th Floor',
  },
  {
    code: 221024500,
    kor: '에오스탑: 루디브리엄 파티 퀘스트',
    eng: 'Ludibrium: Eos Tower 101st Floor',
  },
  {
    code: 221030000,
    kor: '루더스호수: 통제구역',
    eng: 'Omega Sector: Off-Limits',
  },
  {
    code: 221030100,
    kor: '루더스호수: 로스웰초원1',
    eng: 'Omega Sector: Boswell Field I',
  },
  {
    code: 221030200,
    kor: '루더스호수: 로스웰초원2',
    eng: 'Omega Sector: Boswell Field II',
  },
  {
    code: 221030300,
    kor: '루더스호수: 로스웰초원3',
    eng: 'Omega Sector: Boswell Field III',
  },
  {
    code: 221030301,
    kor: '히든스트리트: 마티안의 초원',
    eng: 'Hidden Street: Mateon Field',
  },
  {
    code: 221030400,
    kor: '루더스호수: 로스웰초원4',
    eng: 'Omega Sector: Boswell Field IV',
  },
  {
    code: 221030401,
    kor: '히든스트리트: 플라티안의 초원',
    eng: 'Hidden Street: Plateon Field',
  },
  {
    code: 221030500,
    kor: 'UFO 내부: 덕구의 방',
    eng: 'Omega Sector: Boswell Field V',
  },
  {
    code: 221030600,
    kor: 'UFO 내부: 복도 201',
    eng: 'Omega Sector: Boswell Field VI',
  },
  {
    code: 221030601,
    kor: '히든스트리트: 괴수퇴치',
    eng: 'Hidden Street: Defeat Monsters',
  },
  {
    code: 221040000,
    kor: '루더스호수: 쿨란초원1',
    eng: 'Omega Sector: Kulan Field I',
  },
  {
    code: 221040100,
    kor: '루더스호수: 쿨란초원2',
    eng: 'Omega Sector: Kulan Field II',
  },
  {
    code: 221040200,
    kor: '루더스호수: 쿨란초원3',
    eng: 'Omega Sector: Kulan Field III',
  },
  {
    code: 221040201,
    kor: '히든스트리트: 바나드의 초원',
    eng: 'Hidden Street: Barnard Field',
  },
  {
    code: 221040300,
    kor: '루더스호수: 쿨란초원4',
    eng: 'Omega Sector: Kulan Field IV',
  },
  {
    code: 221040400,
    kor: '루더스호수: 쿨란초원5',
    eng: 'Omega Sector: Kulan Field V',
  },
  {
    code: 221040401,
    kor: '히든스트리트: 도곤스기지입구',
    eng: "Hidden Street: Entrance to Dogon's HQ",
  },
  {
    code: 221040402,
    kor: '히든스트리트: 도곤스기지',
    eng: "Hidden Street: Dogon's HQ",
  },
  {
    code: 222000000,
    kor: '루더스호수: 아랫마을',
    eng: 'Korean Folk Town: Korean Folk Town',
  },
  {
    code: 222000001,
    kor: '아랫마을: 우물',
    eng: 'Korean Folk Town: Pond',
  },
  {
    code: 222010000,
    kor: '루더스호수: 까막산 입구',
    eng: 'Korean Folk Town: Entrance to Black Mountain',
  },
  {
    code: 222010001,
    kor: '루더스호수: 까막산 기슭',
    eng: 'Korean Folk Town: Black Mountain <Corner>',
  },
  {
    code: 222010002,
    kor: '루더스호수: 옹달샘',
    eng: 'Korean Folk Town: A Small Well',
  },
  {
    code: 222010100,
    kor: '루더스호수: 작은 연못가',
    eng: 'Korean Folk Town: Around the Pond',
  },
  {
    code: 222010101,
    kor: '루더스호수: 호랑이의 숲1',
    eng: 'Korean Folk Town: Tiger Forest I',
  },
  {
    code: 222010102,
    kor: '루더스호수: 호랑이의 숲2',
    eng: 'Korean Folk Town: Tiger Forest II',
  },
  {
    code: 222010200,
    kor: '루더스호수: 호랑이 고개',
    eng: 'Korean Folk Town: Tiger Ridge',
  },
  {
    code: 222010201,
    kor: '루더스호수: 까막산 골짜기',
    eng: 'Korean Folk Town: Black Mountain <Valley>',
  },
  {
    code: 222010300,
    kor: '루더스호수: 여우 고개',
    eng: 'Korean Folk Town: Fox Ridge',
  },
  {
    code: 222010400,
    kor: '루더스호수: 도깨비 산마루',
    eng: 'Korean Folk Town: Top of Black Mountain',
  },
  {
    code: 222010401,
    kor: '히든스트리트: 깊은 산 흉가',
    eng: 'Hidden Street: Haunted House',
  },
  {
    code: 222020000,
    kor: '핼리오스탑: 핼리오스탑 도서관',
    eng: 'Ludibrium: Helios Tower <Library>',
  },
  {
    code: 222020100,
    kor: '핼리오스탑: 핼리오스탑2층',
    eng: 'Ludibrium: Helios Tower <2nd Floor>',
  },
  {
    code: 222020200,
    kor: '핼리오스탑: 핼리오스탑99층',
    eng: 'Ludibrium: Helios Tower <99th Floor>',
  },
  {
    code: 222020300,
    kor: '핼리오스탑: 핼리오스탑100층',
    eng: 'Ludibrium: Helios Tower (100th Floor)',
  },
  {
    code: 230010000,
    kor: '아쿠아로드: 바다 나들목',
    eng: 'Aqua Road: Ocean I.C',
  },
  {
    code: 230010001,
    kor: '히든스트리트: 펭귄들의 놀이터',
    eng: "Hidden Street: Penguin's Playground",
  },
  {
    code: 230010100,
    kor: '아쿠아로드: 수정 협곡',
    eng: 'Aqua Road: Crystal Gorge',
  },
  {
    code: 230010200,
    kor: '아쿠아로드: 붉은 산호 숲',
    eng: 'Aqua Road: Red Coral Forest',
  },
  {
    code: 230010201,
    kor: '아쿠아로드: 눈 덮인 고래섬',
    eng: "Aqua Road: Snowy Whale's Island",
  },
  {
    code: 230010300,
    kor: '아쿠아로드: 소라껍질 언덕',
    eng: 'Aqua Road: Turban Shell Hill',
  },
  {
    code: 230010400,
    kor: '아쿠아로드: 서쪽 바다 갈림길',
    eng: 'Aqua Road: Forked Road : West Sea',
  },
  {
    code: 230020000,
    kor: '아쿠아로드: 동쪽 바다 갈림길',
    eng: 'Aqua Road: Forked Road : East Sea',
  },
  {
    code: 230020100,
    kor: '아쿠아로드: 바다 해초 탑',
    eng: 'Aqua Road: The Seaweed Tower',
  },
  {
    code: 230020101,
    kor: '히든스트리트: 숨겨진 마을',
    eng: 'Hidden Street: The Hidden Town',
  },
  {
    code: 230020200,
    kor: '아쿠아로드: 모래성 놀이터',
    eng: 'Aqua Road: Sand Castle Playground',
  },
  {
    code: 230020201,
    kor: '아쿠아로드: 두 그루의 야자수',
    eng: 'Aqua Road: Two Palm Trees',
  },
  {
    code: 230020300,
    kor: '아쿠아로드: 빅 피쉬 골짜기',
    eng: 'Aqua Road: Big Fish Valley',
  },
  {
    code: 230030000,
    kor: '아쿠아로드: 푸른 해초길',
    eng: 'Aqua Road: Blue Seaweed Road',
  },
  {
    code: 230030001,
    kor: '히든스트리트: 물고기 쉼터',
    eng: 'Hidden Street: Fish Resting Spot',
  },
  {
    code: 230030100,
    kor: '아쿠아로드: 버섯 산호 구릉',
    eng: 'Aqua Road: Mushroom Coral Hill',
  },
  {
    code: 230030101,
    kor: '아쿠아로드: 태공의 나룻배',
    eng: "Aqua Road: Tae Gong's Ferry",
  },
  {
    code: 230030200,
    kor: '아쿠아로드: 뾰족한 사각지대',
    eng: 'Aqua Road: The Sharp Unknown',
  },
  {
    code: 230040000,
    kor: '아쿠아로드: 깊은 바다 협곡1',
    eng: 'Aqua Road: Deep Sea Gorge I',
  },
  {
    code: 230040001,
    kor: '히든스트리트: 카르타의 동굴',
    eng: "Aqua Road: Carta's Cave",
  },
  {
    code: 230040100,
    kor: '아쿠아로드: 깊은 바다 협곡2',
    eng: 'Aqua Road: Deep Sea Gorge II',
  },
  {
    code: 230040200,
    kor: '아쿠아로드: 위험한 바다 협곡1',
    eng: 'Aqua Road: Dangerous Sea Gorge I',
  },
  {
    code: 230040300,
    kor: '아쿠아로드: 위험한 바다 협곡2',
    eng: 'Aqua Road: Dangerous Sea Gorge II',
  },
  {
    code: 230040301,
    kor: '히든스트리트: 작은 동굴',
    eng: 'Aqua Road: A Small Cave',
  },
  {
    code: 230040400,
    kor: '아쿠아로드: 난파선의 무덤',
    eng: 'Aqua Road: The Grave of a Wrecked Ship',
  },
  {
    code: 230040401,
    kor: '히든스트리트: 작은 난파선',
    eng: 'Aqua Road: A Small Wrecked Ship',
  },
  {
    code: 230040410,
    kor: '아쿠아로드: 위험한 동굴',
    eng: 'Aqua Road: The Dangerous Cave',
  },
  {
    code: 230040420,
    kor: '아쿠아로드: 피아누스의 동굴',
    eng: 'Aqua Road: The Cave of Pianus',
  },
  {
    code: 240010000,
    kor: '미나르숲: 리프레 서쪽 숲',
    eng: 'Leafre: West Leafre Forest',
  },
  {
    code: 240010100,
    kor: '미나르숲: 미나르숲 서쪽 경계',
    eng: 'Leafre: Minar Forest : West Border',
  },
  {
    code: 240010101,
    kor: '히든스트리트: 털복숭이의 숲',
    eng: 'Leafre: Peach Monkey Forest',
  },
  {
    code: 240010200,
    kor: '미나르숲: 심술쟁이의 숲',
    eng: 'Leafre: Cranky Forest',
  },
  {
    code: 240010300,
    kor: '미나르숲: 가파른 언덕',
    eng: 'Leafre: Steep Hill',
  },
  {
    code: 240010400,
    kor: '미나르숲: 숲의 갈림길',
    eng: 'Leafre: Forest : Crossroad',
  },
  {
    code: 240010500,
    kor: '미나르숲: 산양의 골짜기1',
    eng: 'Leafre: Valley of the Antelope',
  },
  {
    code: 240010501,
    kor: '히든스트리트: 사제의 숲',
    eng: 'Leafre: Forest of the Priest',
  },
  {
    code: 240010600,
    kor: '미나르숲: 하늘 둥지2',
    eng: 'Leafre: Sky Nest II',
  },
  {
    code: 240010700,
    kor: '미나르숲: 하늘 둥지1',
    eng: 'Leafre: Sky Nest I',
  },
  {
    code: 240010800,
    kor: '미나르숲: 하늘 둥지 입구',
    eng: 'Leafre: Entrance to Sky Nest',
  },
  {
    code: 240010900,
    kor: '미나르숲: 미나르숲 동쪽 경계',
    eng: 'Leafre: Minar Forest : East Border',
  },
  {
    code: 240010901,
    kor: '히든스트리트: 투구벌레의 숲',
    eng: 'Leafre: Beetle Forest',
  },
  {
    code: 240011000,
    kor: '미나르숲: 리프레 동쪽 숲',
    eng: 'Leafre: Leafre : East Forest',
  },
  {
    code: 240020000,
    kor: '미나르숲: 붉은 켄타우로스의 영역',
    eng: 'Leafre: The Area of Red Kentaurus',
  },
  {
    code: 240020100,
    kor: '미나르숲: 불과 어둠의 전장',
    eng: 'Leafre: Battlefield of Fire and Darkness',
  },
  {
    code: 240020101,
    kor: '미나르숲: 그리프의 숲',
    eng: 'Leafre: Griffey Forest',
  },
  {
    code: 240020102,
    kor: '미나르숲: 그리프의 숲',
    eng: 'Leafre: Griffey Forest',
  },
  {
    code: 240020200,
    kor: '미나르숲: 검은 켄타우로스의 영역',
    eng: 'Leafre: The Area of Black Kentaurus',
  },
  {
    code: 240020300,
    kor: '미나르숲: 물과 어둠의 전장',
    eng: 'Leafre: Battlefield of Water and Darkness',
  },
  {
    code: 240020400,
    kor: '미나르숲: 푸른 켄타우로스의 영역',
    eng: 'Leafre: The Area of Blue Kentaurus',
  },
  {
    code: 240020401,
    kor: '미나르숲: 마뇽의 숲',
    eng: "Leafre: Manon's Forest",
  },
  {
    code: 240020402,
    kor: '미나르숲: 마뇽의 숲',
    eng: "Leafre: Manon's Forest",
  },
  {
    code: 240020500,
    kor: '미나르숲: 불과 물의 전장',
    eng: 'Leafre: Battlefield of Fire and Water',
  },
  {
    code: 240030000,
    kor: '미나르숲: 용의 숲 입구',
    eng: 'Leafre: Entrance to Dragon Forest',
  },
  {
    code: 240030100,
    kor: '미나르숲: 용의 숲1',
    eng: 'Leafre: Dragon Forest I',
  },
  {
    code: 240030101,
    kor: '미나르숲: 불타는 숲',
    eng: 'Leafre: The Burning Forest',
  },
  {
    code: 240030102,
    kor: '미나르숲: 사라진 숲',
    eng: 'Leafre: The Forest That Disappeared',
  },
  {
    code: 240030103,
    kor: '히든스트리트: 숨겨진 용의 무덤1',
    eng: 'Hidden Street: The Hidden Dragon Tomb I',
  },
  {
    code: 240030104,
    kor: '히든스트리트: 숨겨진 용의 무덤2',
    eng: 'Hidden Street: The Hidden Dragon Tomb II',
  },
  {
    code: 240030200,
    kor: '미나르숲: 용의 숲2',
    eng: 'Leafre: Dragon Forest II',
  },
  {
    code: 240030300,
    kor: '미나르숲: 용의 숲3',
    eng: 'Leafre: Dragon Forest III',
  },
  {
    code: 240040000,
    kor: '미나르숲: 용의 협곡',
    eng: 'Leafre: The Dragon Canyon',
  },
  {
    code: 240040100,
    kor: '미나르숲: 협곡의 갈림길',
    eng: 'Leafre: Canyon : Crossroad',
  },
  {
    code: 240040200,
    kor: '미나르숲: 협곡의 동쪽길',
    eng: 'Leafre: Canyon : East Road',
  },
  {
    code: 240040210,
    kor: '히든스트리트: 블루 와이번의 둥지',
    eng: "Hidden Street: Blue Wyvern's Nest",
  },
  {
    code: 240040300,
    kor: '미나르숲: 협곡의 서쪽길',
    eng: 'Leafre: Canyon : West Road',
  },
  {
    code: 240040310,
    kor: '히든스트리트: 레드 와이번의 둥지',
    eng: "Hidden Street: Red Wyvern's Nest",
  },
  {
    code: 240040400,
    kor: '미나르숲: 와이번의 협곡',
    eng: 'Leafre: Wyvern Canyon',
  },
  {
    code: 240040500,
    kor: '미나르숲: 용의 둥지 입구',
    eng: 'Leafre: Entrance to Dragon Nest',
  },
  {
    code: 240040510,
    kor: '미나르숲: 죽은 용의 둥지',
    eng: 'Leafre: Nest of a Dead Dragon',
  },
  {
    code: 240040511,
    kor: '미나르숲: 남겨진 용의 둥지1',
    eng: 'Leafre: The Dragon Nest Left Behind',
  },
  {
    code: 240040520,
    kor: '미나르숲: 망가진 용의 둥지',
    eng: 'Leafre: Destroyed Dragon Nest',
  },
  {
    code: 240040521,
    kor: '미나르숲: 위험한 용의 둥지',
    eng: 'Leafre: Dangerous Dragon Nest',
  },
  {
    code: 240040600,
    kor: '미나르숲: 큰 둥지 봉우리',
    eng: 'Leafre: Peak of the Big Nest',
  },
  {
    code: 240040610,
    kor: '히든스트리트: 위험한 둥지 밑',
    eng: 'Leafre: Below the Dangerous Nest',
  },
  {
    code: 240040611,
    kor: '히든스트리트: 나인스피릿의 둥지',
    eng: "Leafre: Nine Spirit's Nest",
  },
  {
    code: 240040700,
    kor: '미나르숲: 생명의 동굴 입구',
    eng: 'Leafre: Cave of Life - Entrance',
  },
  {
    code: 240050000,
    kor: '생명의동굴: 동굴 입구',
    eng: 'Cave of Life: Cave Entrance',
  },
  {
    code: 240050100,
    kor: '생명의동굴: 미로방',
    eng: 'Cave of Life: Room of Maze',
  },
  {
    code: 240050101,
    kor: '생명의동굴: 첫번째 미로방',
    eng: 'Cave of Life: 1st Room of Maze',
  },
  {
    code: 240050102,
    kor: '생명의동굴: 두번째 미로방',
    eng: 'Cave of Life: 2nd Room of Maze',
  },
  {
    code: 240050103,
    kor: '생명의동굴: 세번째 미로방',
    eng: 'Cave of Life: 3rd Room of Maze',
  },
  {
    code: 240050104,
    kor: '생명의동굴: 네번째 미로방',
    eng: 'Cave of Life: 4th Room of Maze',
  },
  {
    code: 240050105,
    kor: '생명의동굴: 다섯번째 미로방',
    eng: 'Cave of Life: 5th Room of Maze',
  },
  {
    code: 240050200,
    kor: '생명의동굴: 선택의 동굴',
    eng: 'Cave of Life: Cave of Choice',
  },
  {
    code: 240050300,
    kor: '생명의동굴: 빛의 동굴',
    eng: 'Cave of Life: Cave of Light',
  },
  {
    code: 240050310,
    kor: '생명의동굴: 어둠의 동굴',
    eng: 'Cave of Life: Cave of Darkness',
  },
  {
    code: 240050400,
    kor: '생명의동굴: 혼테일의 동굴 입구',
    eng: "Cave of Life: Entrance to Horntail's Cave",
  },
  {
    code: 240050500,
    kor: '생명의동굴: 동굴의 출구',
    eng: 'Cave of Life: Cave Exit',
  },
  {
    code: 240060000,
    kor: '생명의동굴: 시험의 동굴1',
    eng: 'Cave of Life: The Cave of Trial I',
  },
  {
    code: 240060100,
    kor: '생명의동굴: 시험의 동굴2',
    eng: 'Cave of Life: The Cave of Trial II',
  },
  {
    code: 240060200,
    kor: '생명의동굴: 혼테일의 동굴',
    eng: "Cave of Life: Horntail's Cave",
  },
  {
    code: 250010000,
    kor: '무릉도원: 하늘 숲 입구',
    eng: 'Mu Lung: Entrance to Sky Forest',
  },
  {
    code: 250010100,
    kor: '무릉도원: 하늘 숲 오솔길',
    eng: 'Mu Lung: Sky Forest : The Train',
  },
  {
    code: 250010200,
    kor: '무릉도원: 하늘 숲 깊은 곳',
    eng: 'Mu Lung: Deep in the Sky Forest',
  },
  {
    code: 250010300,
    kor: '무릉도원: 꽃뱀의 영토',
    eng: 'Mu Lung: Snake Area',
  },
  {
    code: 250010301,
    kor: '무릉도원: 야생곰의 영토1',
    eng: 'Mu Lung: Wild Bear Area 1',
  },
  {
    code: 250010302,
    kor: '무릉도원: 야생곰의 영토2',
    eng: 'Mu Lung: Wild Bear Area 2',
  },
  {
    code: 250010303,
    kor: '무릉도원: 야생곰의 영토3',
    eng: 'Mu Lung: Wild Bear Area 3',
  },
  {
    code: 250010304,
    kor: '무릉도원: 떠돌이곰의 영토',
    eng: 'Mu Lung: Territory of Wandering Bear',
  },
  {
    code: 250010400,
    kor: '무릉도원: 하늘 숲이 끝나는 곳',
    eng: 'Mu Lung: Where the Sky Forest Ends',
  },
  {
    code: 250010500,
    kor: '무릉도원: 천도 과수원1',
    eng: 'Mu Lung: Peach Farm1',
  },
  {
    code: 250010501,
    kor: '무릉도원: 안개 낀 숲',
    eng: 'Mu Lung: Foggy Forest',
  },
  {
    code: 250010502,
    kor: '무릉도원: 선인의 숲',
    eng: 'Mu Lung: Virtuous Forest',
  },
  {
    code: 250010503,
    kor: '무릉도원: 요괴의 숲',
    eng: 'Mu Lung: Goblin Forest 1',
  },
  {
    code: 250010504,
    kor: '히든스트리트: 요괴의 숲2',
    eng: 'Mu Lung: Goblin Forest 2',
  },
  {
    code: 250010600,
    kor: '무릉도원: 천도 과수원2',
    eng: 'Mu Lung: Peach Farm 2',
  },
  {
    code: 250010700,
    kor: '무릉도원: 천도 과수원3',
    eng: 'Mu Lung: Peach Farm 3',
  },
  {
    code: 250020000,
    kor: '무릉사원: 초급 수련장',
    eng: 'Mu Lung: Practice Field : Beginner',
  },
  {
    code: 250020100,
    kor: '무릉사원: 하급 수련장',
    eng: 'Mu Lung: Practice Field : Easy Level',
  },
  {
    code: 250020200,
    kor: '무릉사원: 중급 수련장',
    eng: 'Mu Lung: Practice Field : Normal Level',
  },
  {
    code: 250020300,
    kor: '무릉사원: 상급 수련장',
    eng: 'Mu Lung: Practice Field : Advanced Level',
  },
  {
    code: 251000000,
    kor: '무릉도원: 백초마을',
    eng: 'Herb Town: Herb Town',
  },
  {
    code: 251000100,
    kor: '백초마을: 바다쪽 부둣가',
    eng: 'Herb Town: Pier on the Beach',
  },
  {
    code: 251010000,
    kor: '무릉도원: 10년 된 약초밭',
    eng: 'Herb Town: 10-Year-Old Herb Garden',
  },
  {
    code: 251010100,
    kor: '무릉도원: 50년 된 약초밭',
    eng: 'Herb Town: 50-Year-Old Herb Garden',
  },
  {
    code: 251010101,
    kor: '히든스트리트: 60년 된 약초밭',
    eng: 'Herb Town: 60-Year-Old Herb Garden',
  },
  {
    code: 251010102,
    kor: '히든스트리트: 80년 된 약초밭',
    eng: 'Herb Town: 80-Year-Old Herb Garden',
  },
  {
    code: 251010200,
    kor: '무릉도원: 100년 된 약초밭',
    eng: 'Herb Town: 100-Year-Old Herb Garden',
  },
  {
    code: 251010300,
    kor: '무릉도원: 도라지골',
    eng: 'Herb Town: Bellflower Valley',
  },
  {
    code: 251010400,
    kor: '무릉도원: 오래된 습지',
    eng: 'Herb Town: Old Swamp',
  },
  {
    code: 251010401,
    kor: '무릉도원: 빨간코 해적단 소굴1',
    eng: 'Herb Town: Red-Nose Pirate Den 1',
  },
  {
    code: 251010402,
    kor: '무릉도원: 빨간코 해적단 소굴2',
    eng: 'Herb Town: Red-Nose Pirate Den 2',
  },
  {
    code: 251010403,
    kor: '무릉도원: 빨간코 해적단 소굴3',
    eng: 'Herb Town: Red-Nose Pirate Den 3',
  },
  {
    code: 251010500,
    kor: '무릉도원: 외딴 습지',
    eng: 'Herb Town: Isolated Swamp',
  },
  {
    code: 260010000,
    kor: '버닝로드: 아리안트 서문 밖',
    eng: 'The Burning Sands: Outside the West Entrance of Ariant',
  },
  {
    code: 260010001,
    kor: '히든스트리트: 어린 카투스 사막',
    eng: 'Hidden Street: Young Catthus Desert',
  },
  {
    code: 260010100,
    kor: '버닝로드: 선인장 사막1',
    eng: 'The Burning Sands: Cactus Desert 1',
  },
  {
    code: 260010200,
    kor: '버닝로드: 선인장 사막2',
    eng: 'The Burning Sands: Cactus Desert 2',
  },
  {
    code: 260010201,
    kor: '히든스트리트: 로얄 카투스 사막',
    eng: 'Hidden Street: Royal Catthus Desert',
  },
  {
    code: 260010300,
    kor: '버닝로드: 흰 바위 사막',
    eng: 'The Burning Sands: White Rock Desert',
  },
  {
    code: 260010301,
    kor: '히든스트리트: 벨라모아의 굴',
    eng: "Hidden Street: Bellamoa's Cave",
  },
  {
    code: 260010400,
    kor: '버닝로드: 작열하는 사막',
    eng: 'The Burning Sands: The Scorching Desert',
  },
  {
    code: 260010401,
    kor: '히든스트리트: 바위 언덕',
    eng: 'Hidden Street: Rocky Hill',
  },
  {
    code: 260010402,
    kor: '히든스트리트: 붉은전갈단의 소굴',
    eng: "Hidden Street: Red Scorpion's Lair",
  },
  {
    code: 260010500,
    kor: '버닝로드: 메마른 사막',
    eng: 'The Burning Sands: Dry Desert',
  },
  {
    code: 260010501,
    kor: '히든스트리트: 프릴드 서식지대',
    eng: 'Hidden Street: Frilled Field',
  },
  {
    code: 260010600,
    kor: '버닝로드: 유랑단의 텐트',
    eng: 'The Burning Sands: Tent of the Entertainers',
  },
  {
    code: 260010700,
    kor: '버닝로드: 아리안트 동문 밖',
    eng: 'The Burning Sands: Outside East Entrance of Ariant',
  },
  {
    code: 260020000,
    kor: '버닝로드: 아리안트 북문 밖',
    eng: 'The Burning Sands: Outside North Entrance of Ariant',
  },
  {
    code: 260020100,
    kor: '버닝로드: 북쪽 사막길1',
    eng: 'The Burning Sands: North Desert Road 1',
  },
  {
    code: 260020200,
    kor: '선셋로드: 북쪽 사막길2',
    eng: 'Sunset Road: North Desert Road 2',
  },
  {
    code: 260020300,
    kor: '선셋로드: 붉은 모래 사막',
    eng: 'Sunset Road: The Desert of Red Sand',
  },
  {
    code: 260020400,
    kor: '선셋로드: 사막유목민의 폐허',
    eng: 'Sunset Road: The Ruins of Desert Nomads',
  },
  {
    code: 260020401,
    kor: '히든스트리트: 석양의 거인',
    eng: 'Hidden Street: The Giant of the Sunset',
  },
  {
    code: 280011006,
    kor: '아도비스의임무1: 16구역의6',
    eng: "Adobis's Mission I: Area 16-6",
  },
  {
    code: 280030000,
    kor: '마지막임무: 카오스자쿰의제단',
    eng: "Last Mission: Zakum's Altar",
  },
  {
    code: 800000000,
    kor: '일본: 버섯신사',
    eng: 'Zipangu: Mushroom Shrine',
  },
  {
    code: 800010000,
    kor: '일본: 버섯의 숲',
    eng: 'Zipangu: Mushroom Forest',
  },
  {
    code: 800010001,
    kor: '일본: 구름여우의 산',
    eng: 'Zipangu: The Mountain of Cloud Fox',
  },
  {
    code: 800010100,
    kor: '일본: 버섯의 전당',
    eng: 'Zipangu: Hall of Mushroom',
  },
  {
    code: 800020000,
    kor: '일본: 까마귀의 숲1',
    eng: 'Zipangu: Crow Forest',
  },
  {
    code: 800020100,
    kor: '일본: 묘지로 가는 길',
    eng: 'Zipangu: Road to Cemetery',
  },
  {
    code: 800020101,
    kor: '일본: 까마귀의 숲2',
    eng: 'Zipangu: Crow Forest 2',
  },
  {
    code: 800020110,
    kor: '일본: 월하죽림1',
    eng: 'Zipangu: A Night in the Forest',
  },
  {
    code: 800020120,
    kor: '일본: 월하죽림2',
    eng: 'Zipangu: Vanished Village',
  },
  {
    code: 800020130,
    kor: '일본: 월하죽림3',
    eng: 'Zipangu: Encounter with the Buddha',
  },
  {
    code: 800020200,
    kor: '일본: 적막한 묘지',
    eng: 'Zipangu: A Desolate Cemetery',
  },
  {
    code: 800020300,
    kor: '일본: 유령이 떠도는 묘지',
    eng: 'Zipangu: Cemetery Full of Ghosts',
  },
  {
    code: 800020400,
    kor: '일본: 완완 지옥탕',
    eng: 'Zipangu: WanWan Spa of Hell',
  },
  {
    code: 800030000,
    kor: '일본: 동물의 숲',
    eng: 'Zipangu: Forest of Animals',
  },
  {
    code: 910010000,
    kor: '히든스트리트: 달맞이꽃 언덕',
    eng: 'Hidden Street: Primrose Hill',
  },
  {
    code: 910200000,
    kor: '히든스트리트: 미공개된 유적',
    eng: 'Hidden Street: Hidden Relic',
  },
  {
    code: 910500100,
    kor: '히든스트리트: 비밀의 신전',
    eng: 'Hidden Street: Secret Shrine',
  },
  {
    code: 910500200,
    kor: '히든스트리트: 잊혀진 신전',
    eng: 'Hidden Street: Forgotten Shrine',
  },
  {
    code: 921100000,
    kor: '히든스트리트: 용암의 심장부',
    eng: 'Hidden Street: Heart of Lava',
  },
  {
    code: 921100100,
    kor: '히든스트리트: 얼음의 계곡',
    eng: 'Hidden Street: Ice Valley',
  },
  {
    code: 921100200,
    kor: '히든스트리트: 피닉스의 둥지',
    eng: "Hidden Street: Phoenix's Nest",
  },
  {
    code: 921100210,
    kor: '히든스트리트: 프리져의 둥지',
    eng: "Hidden Street: Freezer's Nest",
  },
  {
    code: 922000000,
    kor: '히든스트리트: 장난감공장<4구역>',
    eng: 'Hidden Street: Toy Factory<Sector 4>',
  },
  {
    code: 922020000,
    kor: '히든스트리트: 잊혀진 어둠',
    eng: 'Hidden Street: The Forgotten Darkness',
  },
  {
    code: 922020100,
    kor: '히든스트리트: 타나토스의 방',
    eng: 'Hidden Street: Room of Thanatos',
  },
  {
    code: 922020200,
    kor: '히든스트리트: 숨겨진 발코니',
    eng: 'Hidden Street: Hidden Balcony',
  },
  {
    code: 922200000,
    kor: '히든스트리트: 야생 멧돼지의 영역',
    eng: 'Hidden Street: The Area of Wild Hog',
  },
  {
    code: 923000000,
    kor: '히든스트리트: 일그러진 차원',
    eng: 'Hidden Street: Warped Dimension',
  },
  {
    code: 923000100,
    kor: '히든스트리트: 차가운 동굴',
    eng: 'Hidden Street: Cold Cave',
  },
  {
    code: 924000100,
    kor: '히든스트리트: 하늘둥지 꼭대기',
    eng: 'Hidden Street: The Top of the Sky Nest',
  },
  {
    region: 'jms',
    version: 393,
    code: 741010000,
    kor: '대만: 야시장 거리1',
    eng: 'Taiwan: Night Market Street 1',
  },
  {
    region: 'jms',
    version: 393,
    code: 741010100,
    kor: '대만: 야시장 거리2',
    eng: 'Taiwan: Night Market Street 2',
  },
  {
    region: 'jms',
    version: 393,
    code: 741010200,
    kor: '대만: 야시장 거리3',
    eng: 'Taiwan: Night Market Street 3',
  },
  {
    region: 'jms',
    version: 393,
    code: 741010300,
    kor: '대만: 야시장 거리4',
    eng: 'Taiwan: Night Market Street 4',
  },
  {
    region: 'jms',
    version: 393,
    code: 741020000,
    kor: '대만: 야시장 사잇길1',
    eng: 'Taiwan: Night Market Alley 1',
  },
  {
    region: 'jms',
    version: 393,
    code: 741020100,
    kor: '대만: 야시장 사잇길2',
    eng: 'Taiwan: Night Market Alley 2',
  },
  {
    region: 'jms',
    version: 393,
    code: 800040100,
    kor: '일본: 카에데 성 성문 안',
    eng: 'Zipangu: Inside the Castle Gate',
  },
  {
    region: 'jms',
    version: 393,
    code: 800040200,
    kor: '일본: 카에데 성 복도 1',
    eng: 'Zipangu: Castle Corridor',
  },
  {
    region: 'jms',
    version: 393,
    code: 800040210,
    kor: '일본: 카에데 성 복도 2',
    eng: 'Zipangu: Castle Corridor',
  },
  {
    region: 'jms',
    version: 393,
    code: 800040220,
    kor: '일본: 카에데 성 복도 3',
    eng: 'Zipangu: Castle Corridor',
  },
  {
    region: 'jms',
    version: 393,
    code: 800040230,
    kor: '일본: 카에데 성 복도 4',
    eng: 'Zipangu: Castle Corridor',
  },
  {
    region: 'jms',
    version: 393,
    code: 800040240,
    kor: '일본: 카에데 성 복도 5',
    eng: 'Zipangu: Castle Corridor',
  },
];
