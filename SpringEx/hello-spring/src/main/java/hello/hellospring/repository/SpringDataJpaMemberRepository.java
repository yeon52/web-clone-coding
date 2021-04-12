package hello.hellospring.repository;

import hello.hellospring.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SpringDataJpaMemberRepository extends JpaRepository<Member, Long>, MemberRepository {
    //JpaRepository를 상속받는 인터페이스가 있으면 스프링데이터JPA가 스프링 빈에 구현체를 자동으로 등록한다.
    @Override
    Optional<Member> findByName(String name);
    //JPQL select m from member m where m.name=?
    //규칙이 있음. findBy~ : 조회기능
}
