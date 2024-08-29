<template>
    <div class="section demo-page">
        <h1>Demo</h1>

        <h2>Edit page</h2>

        <div class="edit-mode">
            <div class="btn-area">
                <p><button class="btn" @click="addImage">Add Image</button> : This button add image to Editor.</p>
                <p><button class="btn" @click="sendView">Send View</button> : This button show you view in Editor data.</p>
            </div>

            <ClientOnly>
                <DragonEditor ref="$editor" />
            </ClientOnly>
        </div>

        <h2>View page</h2>

        <p>If you click the "Send view" button. You can see it.</p>

        <div class="view-mode">
            <DragonEditorViewer :content="data" />
        </div>
    </div>
</template>

<script setup lang="ts">
const $editor = ref<DragonEditor>();
const data = ref<DEContentData>([]);

function addImage() {
    const list: DEImage[] = [
        {
            src: "https://fastly.picsum.photos/id/42/3456/2304.jpg?hmac=dhQvd1Qp19zg26MEwYMnfz34eLnGv8meGk_lFNAJR3g",
            width: 3456,
            height: 2304,
        },
        {
            src: "https://fastly.picsum.photos/id/40/4106/2806.jpg?hmac=MY3ra98ut044LaWPEKwZowgydHZ_rZZUuOHrc3mL5mI",
            width: 4106,
            height: 2806,
        },
        {
            src: "https://fastly.picsum.photos/id/58/1280/853.jpg?hmac=YO3QnOm9TpyM5DqsJjoM4CHg8oIq4cMWLpd9ALoP908",
            width: 1280,
            height: 853,
        },
        {
            src: "https://fastly.picsum.photos/id/65/4912/3264.jpg?hmac=uq0IxYtPIqRKinGruj45KcPPzxDjQvErcxyS1tn7bG0",
            width: 4912,
            height: 3264,
        },
        {
            src: "https://fastly.picsum.photos/id/74/4288/2848.jpg?hmac=q02MzzHG23nkhJYRXR-_RgKTr6fpfwRgcXgE0EKvNB8",
            width: 4288,
            height: 2848,
        },
        {
            src: "https://fastly.picsum.photos/id/76/4912/3264.jpg?hmac=VkFcSa2Rbv0R0ndYnz_FAmw02ON1pPVjuF_iVKbiiV8",
            width: 4912,
            height: 3264,
        },
        {
            src: "https://fastly.picsum.photos/id/90/3000/1992.jpg?hmac=v_xO0GFiGn3zpcKzWIsZ3WoSoxJuAEXukrYJUdo2S6g",
            width: 3000,
            height: 1992,
        },
        {
            src: "https://fastly.picsum.photos/id/93/2000/1334.jpg?hmac=HdhcVTbAYkFCXsu1qBRWeEPiy05Qjc3LbnMWJlfEFjo",
            width: 2000,
            height: 1334,
        },
        {
            src: "https://fastly.picsum.photos/id/103/2592/1936.jpg?hmac=aC1FT3vX9bCVMIT-KXjHLhP6vImAcsyGCH49vVkAjPQ",
            width: 2592,
            height: 1936,
        },
        {
            src: "https://fastly.picsum.photos/id/110/5000/3333.jpg?hmac=AvUBrnXG4ebvrtC08T95vEzD1I9SryZ8KSQ4iJ9tb9s",
            width: 5000,
            height: 3333,
        },
    ];
    const idx = Math.floor(Math.random() * 10);

    $editor.value?.addImageBlock(list[idx]);
}

function sendView() {
    if ($editor.value !== undefined) {
        data.value = $editor.value.getContentData();
    }
}
</script>

<style lang="scss">
.demo-page {
    .edit-mode {
        font-size: 16px;

        .btn-area {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 10px;

            .btn {
                padding: 2px 4px;
                background: #f1f1f1;
                color: #333;
            }
        }
    }

    .view-mode {
        font-size: 16px;
    }
}
</style>
