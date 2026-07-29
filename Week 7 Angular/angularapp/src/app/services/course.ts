import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, map, retry, tap } from 'rxjs/operators';
import { Course } from '../models/course.model';
import { MOCK_COURSES } from '../data/mock-courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      retry(2),
      map(courses => courses.filter(c => c.credits > 0)),
      tap(courses => console.log('Courses loaded:', courses.length)),
      catchError(err => {
        console.warn('Falling back to mock course data because the local API is unavailable.', err);
        return of(MOCK_COURSES).pipe(delay(200));
      })
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => {
        const course = MOCK_COURSES.find(item => item.id === id);
        return course
          ? of(course).pipe(delay(100))
          : throwError(() => new Error(`Course with id ${id} was not found.`));
      })
    );
  }

  addCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course).pipe(
      catchError(() => {
        const nextId = Math.max(...MOCK_COURSES.map(item => item.id)) + 1;
        return of({ id: nextId, ...course });
      })
    );
  }
}
