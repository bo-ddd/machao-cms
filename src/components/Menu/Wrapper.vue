<template>
    <div class="menu">
        <div class="menu-containe">
            <div class="menu-items">
                <slot name="items"></slot>
            </div>
            <div class="split-line"></div>
            <div class="menu-files">
                <slot name="files"></slot>
            </div>
        </div>
        <div class="menu-footer">
            <img src="@/assets/imgs/icon-garbage.png" alt="">
            <span>垃圾箱</span>
        </div>
        <div class="menu-mark">?</div>
    </div>

</template>

<style scoped>
.menu {
    box-sizing: border-box;
    height: calc(100vh - 60px);
    border-right: 1px solid #e4e6e5;
    background-color: #f9fbfa;
    position: relative;
}

.menu-containe {
    padding: 15px 10px;
}

.menu-footer {
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    border-top: 1px solid #e4e6e5;
    padding: 10px 17px;
    bottom: 0;
    display: flex;
    align-items: center;
    gap: 0 10px;
}

.menu-footer img {
    width: 16px;
    height: 16px;
}

.split-line {
    width: 100%;
    height: 1px;
    background-color: #e4e6e5;
    margin: 17px 0;
}

.menu-mark {
    width: 34px;
    height: 34px;
    background-color: #fff;
    text-align: center;
    line-height: 34px;
    border-radius: 50%;
    border: 1px solid #ededed;
    font-size: 19px;
    position: absolute;
    bottom: 55px;
    left: 24px;
}
</style>