# 使用 Kraftland 功能

---

## Toolbox / 实用工具

![ToolBox](img/Minecraft/toolbox.svg)

使用 `/k` 激活工具

## 传送

![Teleport](img/Minecraft/teleport.svg)

#### 个人传送点
- 键入 `/sethome <名称>` 来设置一个传送点

- 键入 `/delhome <名称>` 来删除一个传送点

- 键入 `/home <名称>` 来传送到一个传送点

#### 公开传送点
- 使用 `/warp <名称>` 来传送到公共传送点 (可能需要额外权限)

#### 玩家间传送
- 键入 `/tpa <玩家>`  来请求传送到其他玩家
- 键入 `/tpahere <玩家>` 来请求其他玩家传送到你
- 键入 `/back` 来尝试返回上次死亡/传送前的地点

## 领地

![Claims](img/Minecraft/lock_alt.svg)

提示: 你可以手持木棍点击使用键 (通常为右键) 来查看方块是否被包含在领土中

#### 基础领地操作
1. 认领一块土地
	- 手持一把金铲子
	- 依次点击对角线上的两个角

2. 放弃领地
	- 站在待操作领地中
	- 键入 `/AbandonClaim`

3. 购买可用领土面积
    - 键入 `/buyclaimblocks <面积>`

4. 出售可用领土面积
	- 键入 `/sellclaimblocks <面积>`

5. 允许/禁止爆炸物
	- 站在待操作领地中
	- 键入 `/ClaimExplosions`

#### 权限更改

<mark>警告: 这可能导致你的领地在不知情情况下被窃贼光临甚至被炸毁! </mark>

提示: 当 `<玩家>` 为 `all` 时将选中所有玩家.

###### 查询权限信息

```
/TrustList
```

###### 访问信任
访问信任将允许被信任玩家操作拉杆与门.

- 键入 `/accesstrust <玩家>` 来给予.
- 键入 `/untrust <玩家>` 来取消.

###### 容器信任
容器信任将会允许被信任玩家操作容器, 并具有访问信任的权限.


###### 完全信任
完全信任将允许被信任玩家对领地作出任何更改, 包括破坏性操作.

- 键入 `/trust <玩家>` 来给予.
- 键入 `/untrust <玩家>` 来取消.

###### 原子信任
原子信任将会允许被信任玩家操作领地的权限列表.

- 键入 `/permissiontrust <玩家>` 来给予.
- 键入 `/untrust <玩家>` 来取消.

#### 其他操作
- 键入 `/AbandonAllClaims` 来放弃你拥有的所有领土, 需要进行一次 `/AbandonAllClaims confirm` 确认
- 键入 `/ClaimsList` 来列出你拥有的领土

## 资源世界
资源的收集不应该在主世界完成. Kraftland 提供专用资源世界 `resource`.

你可以使用实用工具前往, 或是使用 `/mv tp resource`

## LittleSkin 登录

![LittltSkin](img/Minecraft/littleskin.svg)

<mark>请注意! 这个不稳定的功能随时可能被移除.</mark>

#### 注册帐号

首先, 前往 [LittleSkin 官方网站](https://littleskin.cn)

点击 "现在注册", 填入你的信息并点击注册.

此时, 你刚刚填入的邮箱将会出现一封验证邮件, 使用它验证你的帐户.

#### 设置帐号
回到 `仪表盘页面`

在网页上导航至 `角色管理` -> `添加新角色`

请为你的角色起一个名称:

- 仅含有大小写英语字母, 数字和下划线

设置玩角色名称后, 请修改皮肤.

#### 启动器
请使用 HMCL Launcher 启动 Minecraft 实例.

## 自定义音乐

![Music](img/Minecraft/music.svg)

Kraftland: 天空岛计划包含了许多自定义音乐.

请注意: 立体声唱片目前仅在部分唱片和背景音乐启用.

#### 内容

请注意: 唱片内容以实际情况为准.

| 唱片 ID     | 唱片内容                                                      | 音源 (经过音量标准化与剪裁加工)      |
| --------- | --------------------------------------------------------- | ---------------------- |
| 13        | Bocchi the Rock!                                          | AcgnX Torrent (第三方字幕组) |
| blocks    | 04 - 光るなら -instrumental-                                  | 官方发布的唱片                |
| cat       | 遺サレタ場所 (Live)                                             | 第三方提供文件                |
| chirp     | 樱花庄的宠物女孩                                                  | AcgnX Torrent (第三方字幕组) |
| far       | 魔法禁书目录 (1-3季)                                             | Bilibili               |
| mall      | 内田真礼-ストロボメモリー+闪光灯记忆                                       | 第三方提供文件                |
| mellohi   | 古賀葵 - 答え合わせ                                               | 网易云音乐 (第三方提供文件)        |
| otherside | キラメキ-公生とかをりの演奏ver.-                                       | 官方发布的唱片                |
| pigstep   | 『お兄ちゃんはおしまい！』OP&ED「アイデン貞貞メルトダウン feat.P丸様。」「ひめごと＊クライシスターズ」 | AcgnX Torrent          |
| stal      | 言ノ葉                                                       | AcgnX Torrent          |
| wait      | AVID                                                      | 第三方提供文件                |
| ward      | 私は、私達は - Guiano _ covered by 鹿乃（I Am, We Are）             | YouTube                |
| strad     | Hello to Aoharu                                           | YouTube                |
| 5         | Hans Zimmer Lorne Balfe - Opening Credits                 | 第三方提供文件                |
| relic     | Weight of the World/the End of YoRHa                      | YoRHa                  |

| 音乐ID                | 内容                                               | 艺人 (如果已知)       |
| ------------------- | ------------------------------------------------ | --------------- |
| an_ordinary_day     | Constant Moderato & Connected Sky                | Blue Archive    |
| calm1               | Genshin Impact Theme (Liyue)                     | HOYO-MiX        |
| calm2               | Genshin Impact Theme (Mondstat)                  | HOYO-MiX        |
| calm3               | 岡部啓一 - 穏ヤカナ眠リ                                    | 岡部啓一            |
| comforting_memories | ラヴェル：亡き王女のためのパヴァーヌ                               | 四月は君の嘘 僕と君との音楽帳 |
| floating_dream      | 四月は君の嘘                                           | 横山克             |
| hal1                | 几初的智慧                                            | HOYO-MiX        |
| hal2                | ショパン：エチュード ホ短調 + クライスラー-ラフマニノフ編：愛の悲しみ (ピアノ独奏版)   | 四月は君の嘘 僕と君との音楽帳 |
| hal3                |                                                  | RADWIMPS        |
| hal4                | 皎月云间之梦 / Jade Moon Upon a Sea of Clouds          | HOYO-MiX        |
| infinite_amethyst   | なにが悪い                                            | 結束バンド           |
| left_to_bloom       | Hymn of the Pearl                                | HOYO-MiX        |
| nuance1             | 四月は君の嘘                                           | 横山克             |
| nuance2             | Eternal Anamnesis                                | HOYO-MiX        |
| one_more_day        | 岡部啓一+-+遺サレタ場所+斜光                                 | 岡部啓一            |
| piano1              | 四月は君の嘘                                           | 横山克             |
| piano2              | 四月は君の嘘                                           | 横山克             |
| piano3              | 四月は君の嘘                                           | 横山克             |
| stand_tall          | Constant Moderato Piano Arrange & Romantic Smile | Blue Archive    |
| wending             | ドビュッシー：月の光                                       | 四月は君の嘘 僕と君との音楽帳 |

| Sound ID        | Content(s) | Source       |
| --------------- | ---------- | ------------ |
| kraftland.intro | Aoharu     | Blue Archive |
