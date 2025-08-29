import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { ApiKeyGuard } from 'src/auth/guard/api-key.guard';
import { MenuDto } from './dto/menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('allMenu')
  async getAllMenu() {
    return await this.menuService.getAllMenu();
  }

  @Post('createMenu')
  async createMenu(@Body() dt: MenuDto) {
    return await this.menuService.createMenu(dt);
  }

  @Patch('updateMenu/:id')
  async updateMenu(@Param('id', ParseIntPipe) id: number, @Body() dt: MenuDto) {
    return await this.menuService.updateMenu(id, dt);
  }

  // @Get()
  // findAll() {
  //   return this.menuService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.menuService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
  //   return this.menuService.update(+id, updateMenuDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.menuService.remove(+id);
  // }
}
