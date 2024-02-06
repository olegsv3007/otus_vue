<template>
  <div class="flex flex-column gap-2 w-full">
    <label :for="label">{{ label }}</label>
    <FileUpload
        mode="basic"
        name="image"
        accept="image/*"
        :maxFileSize="1000000"
        @select="onFileSelect"
        @remove="onFileRemove"
        chooseLabel="Browse"
    />
  </div>
</template>

<script setup lang="ts">
import FileUpload, {FileUploadSelectEvent} from "primevue/fileupload";

interface Props {
  label: string,
  placeholder?: string,
}

defineProps<Props>();
const emit = defineEmits(['update']);

const onFileSelect = (event: FileUploadSelectEvent): void => {
  //@todo uploadFile;
  emit('update', event.files[0]?.objectURL);
}

const onFileRemove = (): void => {
  emit('update', '');
}
</script>