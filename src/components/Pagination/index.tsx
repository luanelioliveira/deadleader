import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  itemsPerPage: number
  totalItems: number
  pageCurrent: number
}

export function Pagination({ itemsPerPage, totalItems, pageCurrent }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const pageStart = (pageCurrent - 1) * itemsPerPage

  let pageEnd = pageStart + itemsPerPage

  if (pageEnd > totalItems) {
    pageEnd = totalItems
  }

  return (
    <Stack direction={["column", "row"]} mt={8} spacing={6} justify="space-between" align="center" >
      <Box>
        <strong>{pageStart}</strong> - <strong>{pageEnd}</strong> of <strong>{totalItems}</strong>
      </Box>
      <Stack direction="row" spacing={2}>
        {Array.from({ length: totalPages }).map((_, page) => <PaginationItem isCurrent={page + 1 === pageCurrent} number={page+1} />)}
      </Stack>
    </Stack>
  )
}
