<template>
  <div class="mt-10 pb-4 py-4 bg-transparent overflow-x-auto overflow-y-auto table-cont">
    <table class="w-full">
      <thead class="bg-primary-blue font-gilroy-bold text-left text-gray-100 w-full rounded shadow-sm">
        <tr>
          <th></th>
          <th>Job Title</th>
          <th>Date Modified</th>
          <th>Candiates</th>
          <th></th>
          <th class="flex">
            <span>Filter</span>
            <span>
              <svg class="h6 w-6" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 1H1L9 10.46V17L13 19V10.46L21 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="x in 10" :key="x" class="bg-white  text-gray-500 shadow-md rounded-xl">
          <td>
            <svg class="h-2 w-2" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="5" fill="#EA5566"/>
            </svg>
          </td>
          <td>Customer Success Intern</td>
          <td>12/7/21</td>
          <td>50</td>
          <td class="cursor-pointer">Edit</td>
          <td class="cursor-pointer">Delete</td>
        </tr>
      </tbody>
    </table>    
  </div>
</template>

<script setup>

</script>

<style scoped>
thead{
  border-radius: 2rem;
  padding: 0 1rem;
}
th,
td{
     padding: 1.25rem 1.2rem;
} 
tbody td{
  padding: 1rem 1.2rem;
}

/* th,
table thead tr td:nth-child(1){
    background: #F2F5F7;
} */
table tbody tr td:nth-child(1),
table thead tr th:nth-child(1){
    width: 2.5%;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.table-cont::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.table-cont {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
@media screen and (max-width: 768px){
  table tbody tr td:nth-child(1),
table thead tr th:nth-child(1){
    width: 2.5%;
}
table tbody tr td:last-of-type,
table thead tr th:last-of-type{
    width: 2.5%;
}
}
</style>