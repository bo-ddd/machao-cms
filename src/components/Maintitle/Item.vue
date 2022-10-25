<template>
    <div class="Maintitle">
        <div class="MaintitleItem">
            <div class="MaintitleItem-Text">
                <img src="@/assets/imgs/icon-text.png">
                <span>项目设计</span>
            </div>
            <div>
                <el-icon>
                    <Plus />
                </el-icon>
            </div>
        </div>

    </div>
</template>

<style scoped>
.Maintitle {
    display: flex;
    gap: 0 22PX;
}

.MaintitleItem {
    width: 282px;
    height: 60px;
    border: 1px solid #e7e7e7;
    border-radius: 10px;
    padding: 0 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.MaintitleItem-Text {
    display: flex;
    gap: 0 12px;
}

.MaintitleItem-Text img {
    width: 20px;
    height: 20px;
}
</style>