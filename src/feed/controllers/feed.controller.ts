import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../models/post.interface';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('feed')
export class FeedController {

    constructor(private feedService: FeedService) { }

    @Post()
    create(@Body() post: FeedPost) {
        return this.feedService.createPost(post);
    }

    @Get()
    findAll(): Observable<FeedPost[]> {
        return this.feedService.findAllPosts();
    }

    @Put('update/:id')
    updatePost(
        @Param('id') id: number,
        @Body() feedPost: FeedPost): Observable<UpdateResult> {
        return this.feedService.updatePost(id, feedPost);
    }
    @Delete('delete/:id')
    deletePost(
        @Param('id') id: number): Observable<DeleteResult> {
        return this.feedService.deletePost(id);
    }



}
