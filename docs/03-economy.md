# Economy and Land Claim

## Economy

Kraftland mainly use Player Points as a currency. However, this is not mandatory and players can exchange items, claims and many other stuff using vanilla item-based economy. Player Points are recommended because the ease of duplicating items on the vanilla game. It is a virtual value stored in the Kraftland database and player ranks will not be available.

Commands are available using `/points`. Additionally, the base command `/points` is redirected to `/points me`.

As of today, the server points total is `1035000`.

### Getting points

Players will get 5 points when they join the server at the very first time. Players can build infrastructures for the Kraftland Admin Team to get points, or exchange something with other players.

### Using points

#### Teleportation

Kraftland provides 5 slots when you join the server. More slots can be unlocked by paying 50 Player Points for each of them. To make one of your home public, 100 Player Points is required for each slot.

#### Land Claim

Players can purchase available land claim size. The exact scale is: 1 available block equals to 1 Player Point.

### Disclaimer

<mark>Kraftland does not, and will never sell points in real money. If anyone claims that they can exchange Player Points with real money, this is a scam.</mark>

## Land Claim

![Claims](img/Minecraft/lock_alt.svg)

Land Claim is available for players to avoid griefers. For the full list of commands, see the [GriefPrevention](https://docs.griefprevention.com/commands/) docs.

Players will get 100 blocks of free size when they first logged in, and will get 10 more blocks every hour (2000 max).

To build a base, first teleport to the cherishBuild world either by using [Toolbox](https://kraftland.kimiblock.top/02-how-to.html#toolbox) or by executing `/mv tp cherishBuild`.

### Claiming an unused land

To claim a land:
- Right click the land using wooden stick to make sure it is unused
- Hold a golden shovel and click the diagonal corner of you land
- Done

# 经济与领地

## 建设你自己的基地 (Beta)

![Claims](img/Minecraft/lock_alt.svg)

### 前往建筑世界

- 使用 [Toolbox](https://kraftland.kimiblock.top/02-how-to.html#toolbox) 前往建筑世界
- 使用 `/mv tp cherishBuild`

### 基地选址

- 请使用领地工具检查领地冲突
- 请使用与其他地基相同的高度
- 请使用领地工具划出领地范围
- 请不要拆除 / 修改公共设施
- 请与其他领地保持 2 格间距

提示: 你可以手持木棍点击使用键 (通常为右键) 来查看方块是否被包含在领土中

### 基础领地操作
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

### 权限更改

<mark>警告: 这可能导致你的领地在不知情情况下被窃贼光临甚至被炸毁!</mark>

提示: 当 `<玩家>` 为 `all` 时将选中所有玩家.

#### 查询权限信息

```
/TrustList
```

#### 访问信任
访问信任将允许被信任玩家操作拉杆与门.

- 键入 `/accesstrust <玩家>` 来给予.
- 键入 `/untrust <玩家>` 来取消.

#### 容器信任
容器信任将会允许被信任玩家操作容器, 并具有访问信任的权限.


#### 完全信任
完全信任将允许被信任玩家对领地作出任何更改, 包括破坏性操作.

- 键入 `/trust <玩家>` 来给予.
- 键入 `/untrust <玩家>` 来取消.

#### 原子信任
原子信任将会允许被信任玩家操作领地的权限列表.

- 键入 `/permissiontrust <玩家>` 来给予.
- 键入 `/untrust <玩家>` 来取消.

### 其他操作
- 键入 `/AbandonAllClaims` 来放弃你拥有的所有领土, 需要进行一次 `/AbandonAllClaims confirm` 确认
- 键入 `/ClaimsList` 来列出你拥有的领土
