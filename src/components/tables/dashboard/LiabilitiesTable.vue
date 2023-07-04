<template>
  <div class="overflow-auto">
    <table class="w-full text-white">
      <thead class="text-left border-b-2 border-gray-300 text-xl">
        <td class="py-3 w-2/5">Liabilities</td>
        <td class="py-3">Rate</td>
        <td class="py-3">Anual Amount</td>
        <td class="py-3">Balance</td>
      </thead>
      <tbody class="font-sans">
        <!-- each row -->
        <tr class="">
          <td class="py-2">Cash</td>
          <td class="py-2">-0.61%</td>
          <td class="py-2">$1,323</td>
          <td class="py-2">$216,819</td>
        </tr>
        <!-- each row -->
        <tr class="">
          <td class="py-2">Misc.Assets</td>
          <td class="py-2"><span class="">-14.22%</span></td>
          <td class="py-2"><span class="">($9,962)</span></td>
          <td class="py-2"><span class="">$70,055</span></td>
        </tr>
        <!-- each row -->
        <tr class="">
          <td class="py-2">Mortgages</td>
          <td class="py-2">3.94%</td>
          <td class="py-2">$22,435</td>
          <td class="py-2">$566,566</td>
        </tr>
      </tbody>
      <tfoot class="">
        <tr class="text-xl">
          <td class="py-2">Total</td>
          <td class="py-2">5.91%</td>
          <td class="py-2">$88,330</td>
          <td class="py-2">$1,494,863</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>