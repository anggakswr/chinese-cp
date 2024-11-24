"use client";

import useScrollPosition from "@/helpers/useScrollPosition";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function CustomNav() {
  const scrollPosition = useScrollPosition();

  return (
    <Navbar className={!scrollPosition ? "backdrop-filter-none" : ""}>
      <NavbarBrand>
        <Image src={`/logo.svg`} alt="Logo" width={114} height={21} />
      </NavbarBrand>

      <NavbarContent className="hidden gap-8 sm:flex" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="bg-transparent p-0 font-black text-white data-[hover=true]:bg-transparent"
                endContent={<ChevronDown size={16} />}
                radius="sm"
              >
                채용
              </Button>
            </DropdownTrigger>
          </NavbarItem>

          <DropdownMenu>
            <DropdownItem key="채용" className="cursor-default hover:!bg-white">
              <span className="text-sm font-bold !text-black1">채용</span>
            </DropdownItem>

            <DropdownItem key="해외 개발자 원격 채용">
              <span className="text-sm font-medium !text-black1">
                해외 개발자 원격 채용
              </span>
            </DropdownItem>

            <DropdownItem
              key="외국인 원격 채용 (비개발 직군)"
              className="rounded-none border-b hover:rounded-lg hover:border-none"
            >
              <span className="text-sm font-medium !text-black1">
                외국인 원격 채용 (비개발 직군)
              </span>
            </DropdownItem>

            <DropdownItem key="한국어 가능 외국인 채용">
              <span className="text-sm font-medium !text-black1">
                한국어 가능 외국인 채용
              </span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link color="foreground" href="#" className="font-black">
            해외 개발자 활용 서비스
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            size="sm"
            color="default"
            className="hidden bg-white px-5 font-black text-blue1 md:inline-block"
          >
            문의하기
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
